const router = require('express').Router();

const apiRoutes = require('./api');
const mainRoutes = require('./mainRoutes');
const profileRoutes = require('./profile-routes.js');

router.use('/', mainRoutes);
router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);

module.exports = router;
