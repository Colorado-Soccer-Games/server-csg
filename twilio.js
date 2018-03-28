
//  to sarah : '+19703897747',
//  from ben: '+15033136362',
// my account sid
// AC3bca92c8a80959b20aa21493e48ee306
// my auth token
// ed3c460ebf6e0aec519a4893ede0a1fb

// Twilio Credentials
const accountSid = 'AC3bca92c8a80959b20aa21493e48ee306';
const authToken = "ed3c460ebf6e0aec519a4893ede0a1fb";

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages.create(
  {
    to: "+19703897747",
    from: "+15033136362",
    body: "thiz is ben, dooo U see dis???"
  },
  (err, message) => {
    // console.log(message.sid);
  }
);