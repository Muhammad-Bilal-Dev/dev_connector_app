const { decodeBase64 } = require('bcryptjs');
const express = require('express');
const router = express.Router();

// @route   GET api/profile
// @dese    Test route
// @access  Public
router.get('/', (req, res) => res.send('Profile Route ...'));

module.exports = router;
