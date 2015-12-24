var mongoose = require('mongoose');

var actionSchema = new mongoose.Schema({
    ActionId:{type: Number},
    Date: {type: Date},
    ActionType: {type: String},
    Title: {type: String},
    Description: {type: String},
    ByWhom: {type: String},
    CourseCRN:{type: Number},
    Students: {type: []}
});

module.exports= mongoose.model('Action', actionSchema);