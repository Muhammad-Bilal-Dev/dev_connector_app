const { decodeBase64 } = require('bcryptjs');
const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @dese    Test route
// @access  Public
router.get('/', (req, res) => res.send('Auth Route ...'));

module.exports = router;
