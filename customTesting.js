const { exec } = require('child_process');
const { Socket } = require('phoenix-channels');
const path = require('path');
const util = require('util');

const execAsPromise = util.promisify(exec);

const { SPARTA_GITHUB_WEBHOOK, SPARTA_API_KEY } = process.env;

const PAYLOADS = {
  testsuiteStarted: (build_number, timestamp) => ({
    build_number,
    timestamp
  }),
  testsuiteFinished: (build_number, timestamp) => ({
    build_number,
    timestamp
  }),
  startTest: (build_number, timestamp, exercise) => ({
    build_number,
    timestamp,
    exercise
  }),
  testFailed: (build_number, timestamp, exercise, stack_trace) => ({
    build_number,
    timestamp,
    exercise,
    stack_trace
  }),
  testPassed: (build_number, timestamp, exercise) => ({
    build_number,
    timestamp,
    exercise
  })
};

const buildNumber = timestamp => timestamp.toString().substr(timestamp.toString().length - 10);

const getTimestamp = () => Date.now();

const isSet = variable => variable !== undefined && variable !== null && variable !== '';

const formatExerciseName = (pathName) =>
  execAsPromise('git rev-parse --show-toplevel')
    .then(({stdout: rootDir}) => {
      const relativePath = path.relative(rootDir.trim(), pathName);

      return relativePath.replace(/((.+)\/\.?__tests__\/(.*?)(\.test)?(\.js)|(.*?)(\.test)?(\.js))/, "$2/$3$5$6$8");
    })

if (isSet(SPARTA_GITHUB_WEBHOOK) && isSet(SPARTA_API_KEY)) {
  const socket = new Socket(SPARTA_GITHUB_WEBHOOK, { params: { api_key: SPARTA_API_KEY } });
  socket.connect();
  const channel = socket.channel('progress', {});
  channel.join();

  const onSuccess = value => {
    const timestamp = getTimestamp();
    formatExerciseName(value.testResults[0].name)
      .then(exerciseName =>
        channel.push('test_passed', PAYLOADS.testPassed(buildNumber(timestamp), timestamp, exerciseName)));

    return value;
  };

  const onFailure = error => {
    const timestamp = getTimestamp();
    const value = JSON.parse(error.stdout);
    formatExerciseName(value.testResults[0].name)
      .then(exerciseName =>
        channel.push('test_failed', PAYLOADS.testFailed(buildNumber(timestamp),
                                                        timestamp,
                                                        exerciseName,
                                                        value.testResults[0].message)));

    return JSON.parse(error.stdout);
  };

  const reflect = promise => promise.then(onSuccess, onFailure);

  async function listFiles() {
    const { stdout, stderr } = await execAsPromise('jest --listTests --json');

    return JSON.parse(stdout);
  }

  async function runTest(path) {
    const timestamp = getTimestamp();
    channel.push('test_started', PAYLOADS.startTest(buildNumber(timestamp), timestamp, path));

    const { stdout, stderr } = await execAsPromise(`jest --json ${path}`);

    return JSON.parse(stdout);
  }

  async function startTestsuite() {
    const timestamp = getTimestamp();
    channel.push('testsuite_started', PAYLOADS.testsuiteStarted(buildNumber(timestamp), timestamp));

    const files = await listFiles();

    const tests = files.map(async file => await runTest(file));

    return Promise.all(tests.map(reflect));
  }

  startTestsuite()
    .then(results => {
      const timestamp = getTimestamp();
      channel.push('testuite_finished', PAYLOADS.testsuiteFinished(buildNumber(timestamp), timestamp));
      process.exit();
    })
    .catch(error => {
      console.log('error', error);
      process.exit();
    });
} else {
  console.log('error', 'Sparta URL or/and Sparta API key is/are missing');
}
