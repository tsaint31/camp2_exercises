const exec = require("child_process").exec;

function execPromise(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        return reject(error);
      }
      resolve([stdout, stderr]);
    });
  });
}

module.exports = execPromise;
