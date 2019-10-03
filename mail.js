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
        html: '<body style="color: white; background-color: lightblue;padding: 30px;text-align: center"> <h1> Hello, '+ name +'! &#128525;</h1><br><h2 style="color: white;">Good job working on your GRE Test!</h2> <h2>You had ' + result+ ' from ' + numberOfquestions + '!</h2><img src="cid:kid.jpg"><h2 style="color: white;">Keep going with your practice and get great results!</h2><h3 style="color: white;">Best wishes from your Team One! <br><span style="font-size:500%;color:green;">&hearts;</span></h3></body>',
        // added a picture inside of html file
        attachments: [{
            filename: 'kid.jpg',
            path: './kid.jpg',
            cid: 'kid.jpg' //same cid value as in the html img src
        }]
    }
    // step 3 - to handle errors
     transporter.sendMail(mailText, function (err, data) {
        if (err) {
            console.log(err);
        } 
    })
    // ps: you also need to turn on less security app in gmail, I turned it on for our account
}
module.exports=sendMail;