// we need dotenv to hide our email and password 
require("dotenv").config();

// here is our main package for sending emails.
//  in this case it sends and gets emails only for gmail 
const nodemailer = require('nodemailer');
var userEmail;

// step 1 - we create a transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // our email and password are stored in .env
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }

});
// step 2 - mail template
let mailText = {
    from: process.env.EMAIL,
    to: userEmail,
    subject: 'I works!',
    text: 'Here is my text...',
    html: '<h2> <bold> You result is here<bold> </h2>' 
}
// step 3 - to handle errors
transporter.sendMail(mailText, function (err, data) {
    if (err) {
        console.log(err);
    } else {

        console.log("it was sent");
      }
    })

// ps: you also need to turn on less security app in gmail, I turned it on for our account