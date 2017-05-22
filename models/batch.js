var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var BatchSchema = mongoose.Schema({
  batch_createdat:{
    type: Date,
    default: Date.now
  },
  batch_updatedat:{
    type: Date,
    default: Date.now
  },
  batch_status:{
    type: [{
      type: String,
      enum: ['prepayment_pending','production','qualitytest','loading_origin','shipping_sea','shipping_train','shipping_truck','customs_destination','acceptance']
    }],
    default: ['prepayment_pending']
  }
  //batch_price
})

module.exports = mongoose.model('Batch', BatchSchema);
