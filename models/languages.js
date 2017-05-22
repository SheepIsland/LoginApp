var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var LanguagesSchema = mongoose.Schema({
  Language_Culture_Name:{
    type: String
  },
  Display_Name:{
    type: String
  },
  Culture_Code:{
    type: String
  },
  ISO_639x_Value:{
    type: String
  }
})

module.exports = mongoose.model('Languages', LanguagesSchema);
