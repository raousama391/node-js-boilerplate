const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Assistant route works!'));

module.exports = router;