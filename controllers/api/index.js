const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/books', bookRoutes);
router.use('/projects', projectRoutes);

module.exports = router;