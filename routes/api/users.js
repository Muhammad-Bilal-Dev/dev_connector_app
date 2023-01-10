const { decodeBase64 } = require('bcryptjs');
const express = require('express');
const router = express.Router();

// @route   GET api/users
// @dese    Test route
// @access  Public
router.get('/', (req, res) => res.send('User Route ...'));

module.exports = router;
