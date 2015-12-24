var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    StudentId:{type: Number},
    FirstName: {type: String},
    LastName: {type: String},
    Gender: {type: String},
    Program: {type: String},
    GPA:{type: Number},
    AtRiskCategory: {type: String},
    Semester: {type: String},
    Courses: {type: []}
});

module.exports= mongoose.model('Student', studentSchema);