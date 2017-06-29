console.log("volunteers.js in server/controllers");

var mongoose = require('mongoose');
var Volunteer = mongoose.model('Volunteer');
module.exports = {

  register: function(req,res){
    var errors = {errors:{
      general:{
        message: "'password' must match 'confirm password'"
      }
    }}
    console.log("in the register function in volunteers.js");
    if (req.body.password != req.body.confpass){
      //validations::
      res.json(errors);
    }else{
      console.log("passwords are equal, we are almost there")
      var volunteer = new Volunteer();
      volunteer.name = req.body.name;
      volunteer.email = req.body.email;
      volunteer.password = req.body.password;

      volunteer.save(function(err,volunteer){
        if (err){
          console.log("an error creating the volunteer:", err);
          res.json(err);
        } else {
          console.log("this is the voluntrer:", volunteer);

          res.send(volunteer);
        }
      })
    }
  },

  login:function(req,res){
    var errors = {errors:{
      general:{
        message: "Invalid Login Information"
      }
    }}
    console.log("in the login function in volunteers.js!")
    Volunteer.findOne({email:req.body.email}).exec(function(err,volunteer){
      //validations!!! :::
      if(!req.body.email||!req.body.password){
        res.json(errors);
      //else if there is no volunteer found!!! :::
    }else if(!volunteer){
        res.json(errors);
      }else{
        if(volunteer.password != req.body.password){
          console.log("passwords did not match!");
          res.json(errors);
        }else{
          console.log("in the successful login function!")
          req.session.volunteer = {
            name: volunteer.name,
            _id: volunteer._id
          }
          res.send(volunteer);
        }
      }
    })
  },

  getCurrentVolunteer: function(req,res){
    Volunteer.findOne({_id: req.session.volunteer._id}).exec(function(err, volunteer){
      if(err){
        res.sendStatus(400);
        console.log('could not find volunteer in getCurrentVolunteer of volunteers.js');
      }else{
        console.log('success! grabbing session data and sending volunteer in session to client as a json object')
        var logged_volunteer = {
          name:volunteer.name,
          email:volunteer.email,
          _id:volunteer._id
        }
        res.json(logged_volunteer)
      }
    })
  },

  logout:function(req,res){
    console.log("in the logout function in volunteers.js");
    req.session.destroy(function(){
      req.session=null;
      console.log('session destroyed:')
      console.log(req.session);
      res.sendStatus(200);
    })
  }

}
