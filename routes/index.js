var express = require("express");
var router = express.Router();
const sgMail = require('@sendgrid/mail')
const nodemailer = require("nodemailer");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
     


router.post("/send", (req, res) => {

  var subject= req.body.subject
  var message= req.body.msg
  var email= req.body.email
  var other = `<h1>This Message From ${req.body.email}</h1>
              <h3>Name: ${req.body.name}</h3>
              <p>${req.body.msg}</p>
  `
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'fack21gasa@gmail.com', // Change to your recipient
  from: 'omar.imad.ali.99@gmail.com', // Change to your verified sender
  subject: subject,
  text: message,
  html: other,
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

  res.send('<h2>Your message has been sent. Thank you! </h2><br /><a href="/"><div class="text-center"><button type="submit">Back</button></div></a>')
    // res.redirect("/");
});

module.exports = router;
