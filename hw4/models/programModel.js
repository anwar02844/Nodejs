var mongoose = require('mongoose');

var programSchema = new mongoose.Schema({
    Code: {type: String},
    Name: {type: String}
});

module.exports= mongoose.model('Program', programSchema);