var mongoose = require('mongoose');

var staffSchema = new mongoose.Schema({
    StaffNo:{type: Number},
    Username: {type: String},
    Firstname: {type: String},
    Lastname: {type: String},
    Password: {type: String},
    Type: {type: String},
    Program: {type: []}
});
module.exports= mongoose.model('Staff', staffSchema);