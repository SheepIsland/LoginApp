var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	},
  roles: {
    type: [{
      type: String,
      enum: ['user','admin']
    }],
    default: ['user']
  },
  usercreatedat:{
    type: Date,
    default: Date.now
  },
  userupdatedat:{
    type: Date,
    default: Date.now
  },
  usermiddlename:{
    type: String
  },
  userlastname:{
    type: String
  },
	usercompany:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Company'
	}],
	userotigin:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Countries'
	}],
  userposition:{
    type: String
  },
  useradress:{
    type: String
  },
  userphonework:{
    type: Number
  },
  userphonemobile:{
    type: Number
  },
  userskype:{
    type: String
  },
  userwechat:{
    type: String
  },
  usergender:{
    type: [{
      type: String,
      enum: ['male','female','other']
    }],
    default: ['male']
  },
  userdob:{
    type: Date
  },
	userpreferredlanguage:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Languages'
	}],
	usersecondarylanguage:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Languages'
	}],
  usernote:{
    type: String
 }

});

var User  = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}

module.exports = User;
