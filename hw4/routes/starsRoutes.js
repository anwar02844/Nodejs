var express = require('express');
var router = express.Router();
var starsCtrl = require('../controllers/starsController');

// home page
router.get('/', function(req, res) {
    res.send('Please use correct path such as /student!');
});
//Get Staffs
router.get('/staffs', function(req, res) {
    return starsCtrl.listStaffs(req, res);
});
//Get Students
router.get('/students', function(req, res) {
    return starsCtrl.listStudents(req, res);
});
//Get Actions
router.get('/actions', function(req, res) {
    return starsCtrl.listActions(req, res);
});
//Get Courses
router.get('/courses', function(req, res) {
    return starsCtrl.listCourses(req, res);
});
//Get Programs
router.get('/programs', function(req, res) {
    return starsCtrl.listPrograms(req, res);
});
/*

/!* POST filter by member name - home page. *!/
router.post('/', function(req, res) {
    return starsCtrl.filterByMember(req, res);
});

/!* GET New Note page. *!/
router.get('/newnote', function(req, res) {
    return starsCtrl.getNote(req, res);
});

/!* POST New Note page. *!/
router.post('/newnote', function(req, res) {
    return starsCtrl.create(req, res);
});
*/

module.exports = router;
