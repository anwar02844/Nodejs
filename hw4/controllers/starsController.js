var Student = require('../models/studentModel.js');
var Staff = require('../models/staffModel.js');
var Course = require('../models/courseModel.js');
var Program = require('../models/programModel.js');
var Action = require('../models/actionModel.js');

exports.start = function(req, res) {
    var query = Action.find();
    query.limit(25)
        .exec(function(err, results){
            res.send(results);
        });
};
exports.listStaffs = function(req, res) {
    var query = Staff.find();
    query.limit(25)
        .exec(function(err, results){
            res.send(results);
        });
};
exports.listStudents = function(req, res) {
    var query = Student.find();
    query.limit(25)
        .exec(function(err, results){
            res.send(results);
        });
};
exports.listCourses = function(req, res) {
    var query = Course.find();
    query.limit(25)
        .exec(function(err, results){
            res.send(results);
        });
};
exports.listPrograms = function(req, res) {
    var query = Program.find();
    query.limit(25)
        .exec(function(err, results){
            res.send(results);
        });
};
exports.listActions = function(req, res) {
    var query = Action.find();
    query.limit(25)
        .exec(function(err, results){
            res.send(results);
        });
};
/*

exports.filterByMember = function(req, res) {
    var query = Standup.find();
    var filter = req.body.memberName;

    query.sort({ createdOn: 'desc' });

    if (filter.length > 0)
    {
        query.where({ memberName: filter})
    }

    query.exec(function(err, results) {
        res.render('index', { title: 'Standup - List', notes: results });
    });
};
*/

exports.create = function(req, res) {
    var entry = new Standup({
        memberName: req.body.memberName,
        project: req.body.project,
        workYesterday: req.body.workYesterday,
        workToday: req.body.workToday,
        impediment: req.body.impediment
    });

    entry.save(function (err) {
        if (err) {
            var errMsg = 'Sorry, there was an error saving the stand-up meeting note. ' + err;
            res.render('newnote', { title: 'Standup - New Note (error)', message: errMsg });
        }
        else {
            console.log('Stand-up meeting note was saved!');
            // Redirect to the home page to display list of notes...
            res.redirect(301, '/');
        }
    });

};
/*
exports.getNote = function (req, res) {
    res.render('newnote', { title: 'Standup - New Note'});
}*/
