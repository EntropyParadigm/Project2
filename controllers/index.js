const router = require('express').Router();

const apiRoutes = require('./api');
const profileRoutes = require('./profile-routes.js');
const mainRoutes = require('./mainRoutes');


router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);
router.use('/', mainRoutes);

module.exports = router;
