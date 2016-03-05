var mongoose = require('mongoose');
var User = require('./models/users.js');
var Comment = require('./models/comments.js');
var Student = require('./models/students.js');

module.exports = function (app, express) {

  // get complete list of students
  app.get('/students', function(req, res) {
    mongoose.model('Student').find(function (err, students) {
      res.send(students);
    });
  });

  // post a new student (used to initially populate db)
  app.post('/students', function (req, res) {
    var student = new Student({
      name: req.body.name,
      img_name: req.body.img_name,
      location: req.body.location,
      info: req.body.info
    });
    student.save();
    res.sendStatus(200);
  });

  app.post('/users', function (req, res) {
    // send username to database IF not already there
    // set sessionStorage('id') to equal _ID in database
    var newUser = new User({
      name: req.body.name
    });
    var userId = newUser._id;
    console.log(userId);

    User.findOne({name: newUser.name}, function (err, user) {
      if(user){
        console.log('user already exists, not saving');
        res.send(200, user);
      } else {
        newUser.save(function(){
          console.log('saved ' + newUser.name + ' to db');
          res.send(200, newUser);
        });
      }
    });
  });

  app.get('/comments', function (req, res) {
    Comment.find(function (err, comments) {
      res.send(200, comments);
    });
  });


  app.post('/comments', function (req, res) {
    // send comment to database using session
    console.log('post to comments: ', req.body);
    var comment = new Comment({
      text: req.body.text, 
      commentingUser: req.body.commentingUser,
      pageId: req.body.pageId
    });

    comment.save();
    // Comment.find({pageId: req.body.pageId}, function (err, comments) {
    //   res.send(200, comments);
    // });

    res.sendStatus(200);
    // store user as _ID from session storage
  });





  // FRIENDS:
  app.post('/friends', function (req, res) {
    console.log('Friend request recieved');
    console.log('current username: ', req.body.currentUser);

    User.findOne({name: req.body.currentUser}, function (err, user) {
      user.friends.push(req.body.friend);
      user.save(function (err) {
        if (err) {
          console.log('error updating friends list ', err);
        }
      });
    });
    res.sendStatus(200);
  });

  app.get('/friends', function (req, res) {
    User.findOne()
    res.send(200, friends);
  });


};