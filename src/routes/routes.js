const { Router } = require('express');

const router = Router();

router.use('/auth', require('../auth/auth.routes'));
router.use('/note', require('../notes/notes.routes'));

module.exports = router;
