const express = require('express');
const { registerUser } = require('../controllers/Auth ApisController');
const router = express.Router();

router.post('/auth/register', registerUser);

module.exports = router;