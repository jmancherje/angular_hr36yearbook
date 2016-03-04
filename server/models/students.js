var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
  name: String,
  img_name: String,
  location: String,
  info: String
});

var Student = mongoose.model('Student', studentSchema);

module.exports = Student;

