var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: {type: String, required:true, minlength: 2, trim: true},
  email: {type: String, required:true, minlength: 7, trim: true},
  password: {type:String, required:true, minlength: 4, trim: true}
},{timestamps:true});

mongoose.model('Volunteer', UserSchema);
