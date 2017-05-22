var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var CountriesSchema = mongoose.Schema({
  ISO_Short:{
    type: String
  },
  ISO_Long:{
    type: String
  },
  Official_Short_Form:{
    type: String
  },
  Official_Long_Form:{
    type: String
  },
  ISO_Code:{
    type: Number
  },
  UN_Code:{
    type: Number
  },
  Capital_or_Major_City:{
    type: String
  }
})

module.exports = mongoose.model('Countries', CountriesSchema);
