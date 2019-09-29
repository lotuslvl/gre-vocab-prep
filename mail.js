// we need dotenv to hide our email and password 
require("dotenv").config();
// here is our main package for sending emails.
//  in this case it sends and gets emails only for gmail 
const nodemailer = require('nodemailer');

var sendMail = function(name, email, result, numberOfquestions){

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
        to: email,
        subject: 'GRE results.',
        text: "Welcome to our GRE preparation team!",
        html: '<body style="color: green; background-color: yellow;padding: 30px;text-align: center"> <h1> Hello, '+ name +'!</h1><br><h2>Good job working on your GRE Test!</h2> <h2>You had ' + result+ ' from ' + numberOfquestions + '!</h2><h2>Keep going with your practice and get great results!</h2><h3>Best wishes from your Team One! <br><span style="font-size:500%;color:red;">&hearts;</span></h3></body>',
        attachments: [
            {
                filename: 'kid.jpg',
                path: './kid.jpg'
            }
        ]
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
}
module.exports=sendMail;