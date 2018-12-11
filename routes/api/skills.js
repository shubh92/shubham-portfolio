const express = require('express');
const router = express.Router();

// @route   GET api/skills/all
// @desc    get all skills 
// @access  Public
router.get('/all', (req, res) => res.json({msg: 'skills works'}));

module.exports = router;