const oauth = require("OAuth");
const OAuth = new oauth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET
  , "1.0A", null, "HMAC-SHA1"
);

const url = encodeURI("https://api.twitter.com/1.1/search/tweets.json?q=triathlon");

function retrieveTweets(callback) {
  OAuth.get(url, process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET, function (error, data) {
    const text=JSON.parse(data).statuses.map(reformatTweets => reformatTweets.text).join();
    console.log(text);
    callback(text);

  });
}
function callback(text) {
  console.log(text);
}

retrieveTweets(callback);
