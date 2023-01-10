const { decodeBase64 } = require('bcryptjs');
const express = require('express');
const router = express.Router();

// @route   GET api/posts
// @dese    Test route
// @access  Public
router.get('/', (req, res) => res.send('Post Route ...'));

module.exports = router;
