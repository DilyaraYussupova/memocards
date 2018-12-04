var express = require('express');
var router = express.Router();
var setsCtrl = require('../../controllers/sets');

/*---------- Public Routes ----------*/
router.get('/', setsCtrl.getAll);
router.post('/', setsCtrl.createSet);


/*---------- Protected Routes ----------*/


module.exports = router;