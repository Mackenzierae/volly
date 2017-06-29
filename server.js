var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))


app.use(express.static(path.join(__dirname, 'client')))

//session configuration
var sessionConfig = {
 secret:'CookieMonster', // Secret name for decoding secret and such
 resave:false, // Don't resave session if no changes were made
 saveUninitialized: true, // Don't save session if there was nothing initialized
 name:'motherfuckingcookies', // Sets a custom cookie name
 cookie: {
  secure: false, // This need to be true, but only on HTTPS
  httpOnly:false, // Forces cookies to only be used over http
  maxAge: 3600000
 }
}

app.use(session(sessionConfig));

app.use(function(req,res,next){
  // console.log(req.session);
  next();
})

require('./server/config/mongoose.js')

var routeSetter = require('./server/config/routes.js')(app);

app.listen(8000, function(){
  console.log('running on port 8000')
})
