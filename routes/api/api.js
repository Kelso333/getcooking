var express = require('express');
var router = express.Router();
var apiCtrl = require('../../controllers/api');

/*---------- Protected Routes ----------*/

// TODO: Protect this route with custom middleware
router.get('/recipes', apiCtrl.recipe);

/*----- Helper Functions -----*/


module.exports = router;