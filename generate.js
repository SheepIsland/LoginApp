var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/loginapp');
var db = mongoose.connection;

var User = require('./models/user');
//var User = require('/models/user');
//Country
/*var country = {ISO_Short: "RU", ISO_Long:"RUS",Official_Short_Form:"Russia",Official_Long_Form:"Russian Federation",ISO_Code: 643, UN_Code:643,Capital_or_Major_City:"Moscow"};
collection.insertOne(country,function(err,result){
  if(err){
    return console.log(err);
  }
  console.log(result.ops);
});
//Language
collection=db.collection("Languages");
var language = {Language_Culture_Name: "ru-RU",Display_Name:"Russian - Russia",Culture_Code:"0x0419",ISO_639x_Value:"RUS"};
collection.insertOne(language,function(err,result){
  if(err){
    return console.log(err);
  }
  console.log(result.ops);
});*/
//user
collection=db.collection("User");
var ObjectId = require('mongodb').ObjectID;

var newUser = new User({
  username: "Violetta",
  password: "1",
  roles: "user",
  //userotigin: ObjectId("590d022d4acdc4068810254e")
});

//var user={username:"Violetta",password:"1",roles:"user",userotigin: ObjectId("590d022d4acdc4068810254e")};
User.createUser(newUser, function(err, user){
  if(err) throw err;
  console.log(user);
});
