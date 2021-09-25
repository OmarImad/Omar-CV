var express = require("express");
var router = express.Router();
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
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'extra1store@gmail.com',
      pass: '12345!@#$%'
    }
  });
  
  var mailOptions = {
    from: 'exstra1store@gmail.com',
    to: 'omar.imad.ali.99@gmail.com',
    subject: subject,
    text: 'Anything',
    html: other
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send('<h2>Your message has been sent. Thank you! </h2><br /><a href="/"><div class="text-center"><button type="submit">Back</button></div></a>')
    // res.redirect("/");
});

module.exports = router;
