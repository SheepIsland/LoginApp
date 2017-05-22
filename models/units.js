var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UnitsSchema = mongoose.Schema({
  quantity: {
    type: [{
      type: String,
      enum: ['mt','kg','l','ml','sheet','coil','item','sqm','cbm']
    }],
    default: ['mt']
  },
  quality: {
    type: [{
      type: String,
      enum: ['prime','high','average','low','fubar']
    }],
    default: ['prime']
  },
  currency: {
    type: [{
      type: String,
      enum: ['usd','cny','rub','eur','chf']
    }],
    default: ['usd']
  }
})

module.exports = mongoose.model('Units', UnitsSchema);
