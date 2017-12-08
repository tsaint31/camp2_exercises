const request = require("request");
const oauth = require("OAuth");
const OAuth = new oauth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET
  , "1.0A", null, "HMAC-SHA1"
);
const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_KEY;
const urlwatson = process.env.WATSON_URL;
const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";

function retrieveTweets(name,callback) {
  OAuth.get(url+name, process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET, function (error, data) {
    const text=JSON.parse(data).map(reformatTweets => reformatTweets.text).join();
    console.log(text);
    callback(text);

  });
}
function retrieveEmotions(text) {
  const uri = encodeURI(urlwatson + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);
  request({ url: uri, headers: { "Authorization": auth } }, function (error, response, body) {
    console.log(body);
  });
}
retrieveTweets("EmmanuelMacron",retrieveEmotions);
