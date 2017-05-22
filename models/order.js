var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var OrderSchema = mongoose.Schema({
  order_createdat:{
    type: Date,
    default: Date.now
  },
  order_updatedat:{
    type: Date,
    default: Date.now
  }
  //order_price
})

module.exports = mongoose.model('Order', OrderSchema);
