var mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
    CRN:{type: Number},
    CourseCode: {type: String},
    CourseName: {type: String},
    Semester: {type: String},
    InstructorId: {type: []}
});

module.exports= mongoose.model('Course', courseSchema);