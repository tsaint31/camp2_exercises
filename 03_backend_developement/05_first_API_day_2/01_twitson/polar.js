const oauth = require("OAuth");
const OAuth = new oauth.OAuth(
  process.env.POLAR_CLIENT_ID,
  process.env.POLAR_CLIENT_SECRET
);

const url = encodeURI("https://flow.polar.com/oauth2/authorization?response_type=code&client_id=");

// https://flow.polar.com/oauth2/authorization?response_type=code&scope={SCOPE}&client_id={CLIENT_ID}&state={STATE}


function retrieveTweets(callback) {
  OAuth.get(url+process.env.POLAR_CLIENT_ID, function (error, data) {
    const text=JSON.parse(data);
    console.log(text);
    callback(text);

  });
}
function callback(text) {
  console.log(text);
}

retrieveTweets(callback);
