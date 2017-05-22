var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var CompanySchema = mongoose.Schema({
  company_createdat:{
    type: Date,
    default: Date.now
  },
  company_updatedat:{
    type: Date,
    default: Date.now
  },
  company_type:{
    type: [{
      type: String,
      enum: ['supplier','buyer','logistics','it']
    }],
    default: ['supplier']
  },
  company_name:{
    type: String
  }
  //company_origin
  //company_regionalpartner
  company_alias:{
    type: String
  },
  company_address:{
    type:String
  },
  company_ceo:[{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  company_cfo:[{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  company_cto:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  company_manager:[{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  company_website:{
    typy: String
  },
  company_phone:{
    type: Number
  },
  company_emaildomain:{
    type: String
  }

})

module.exports = mongoose.model('Company', CompanySchema);
