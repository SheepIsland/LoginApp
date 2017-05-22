var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var ShippingSchema = mongoose.Schema({
  shipping_production:{
    type: Number
  },
  shipping_testing:{
    type: Number
  },
  shipping_productiondate:{
    type: Date,
    default: Date.now
  },
  shipping_testingdate:{
    type: Date,
    default: Date.now
  },
  shipping_termssupplier:{
    type: [{
      type: String,
      enum: ['EXW','FOB','CIF','CIP','DAP','DDP']
    }],
    default: ['EXW']
  },
  shipping_termsbuyer:{
    type: [{
      type: String,
      enum: ['EXW','FOB','CIF','CIP','DAP','DDP']
    }],
    default: ['EXW']
  },
  shipping_cost:{
    type: Number
  }
  //batch_price
})

module.exports = mongoose.model('Shipping', ShippingSchema);
