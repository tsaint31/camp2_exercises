

const request = require("request");

const POLAR_CLIENT_ID=process.env.POLAR_CLIENT_ID;

// https://flow.polar.com/oauth2/authorization?response_type=codeclient_id=

function polarAuthentification(CLIENT_ID) {
  request(
    {
      url: `https://flow.polar.com/oauth2/authorization?response_type=code&client_id=${CLIENT_ID}`,
      method: "GET"
    },
    function (error,response,body) {
      console.log(body);
      return body;
    }
  );
}

polarAuthentification(POLAR_CLIENT_ID);
