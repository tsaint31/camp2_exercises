const FULL_CONTACT_KEY = process.env.FULL_CONTACT_KEY;
const fetch = require("node-fetch");

function fullcontact(email) {
  fetch(`https://api.fullcontact.com/v2/person.json?email=${email}`,{
    headers: {
      "X-FullContact-APIKey": `${FULL_CONTACT_KEY}`
    }
  }).then(function(res) {
    return res.json();
  }).then(function(json){
    console.log(json);
  });
}

fullcontact("dominique.firinga@decathlon.com");
