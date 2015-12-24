//load the json files to a MongoDB database
var fs = require('fs');
var Student = require('../models/studentModel.js');
var Staff = require('../models/staffModel.js');
var Course = require('../models/courseModel.js');
var Program = require('../models/programModel.js');
var Action = require('../models/actionModel.js');

exports.dataService = function(req,res,next){
    var entry;
    fs.readFile('./data/staff.json', 'utf8', function (err, data) {
        if (err) throw 'Sorry, there was an error' + err;
        var json = JSON.parse(data);
        json.forEach(function(item) {
            entry = new Staff({
                StaffNo : item.StaffNo,
                Username: item.Username,
                Firstname: item.Firstname,
                Lastname: item.Lastname,
                Password: item.Password,
                Type: item.Type,
                Program: item.Program
            });
            entry.save(function (err) {
                if (err) {
                    console.log('Sorry, there was an error' + err);
                }else {
                    console.log('staffs was saved!');
                }
            });
            //console.log(entry);
        });
    });
    fs.readFile('./data/student.json', 'utf8', function (err, data) {
        if (err) throw 'Sorry, there was an error' + err;
        var json = JSON.parse(data);
        json.forEach(function(item) {
            entry = new Student({
                StudentId : item.StudentId,
                FirstName: item.FirstName,
                LastName: item.LastName,
                Gender: item.Gender,
                Program: item.Program,
                GPA: item.GPA,
                AtRiskCategory: item.AtRiskCategory,
                Semester: item.Semester,
                Courses: item.Courses
            });
            entry.save(function (err) {
                if (err) {
                    console.log('Sorry, there was an error' + err);
                }else {
                    console.log('staffs was saved!');
                }
            });
            //console.log(entry);
        });
    });
    next();
};