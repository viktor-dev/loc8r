var express = require('express'),
	router = express.Router(),
	locations = require('../controllers/locations'),
	others = require('../controllers/others');

/* location related pages */
router.get('/', locations.list);
router.get('/location', locations.info);
router.get('/location/review', locations.review);

/* other pages */
router.get('/about', others.about);

module.exports = router;
