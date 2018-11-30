var express = require('express');
var router = express.Router();
var setsCtrl = require('../../controllers/sets');

/*---------- Public Routes ----------*/
router.post('/', setsCtrl.createSet);


/*---------- Protected Routes ----------*/


module.exports = router;