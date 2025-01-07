const express = require('express');
const { loginController, registerController } = require('../controllers/authControllers');

const router = express.Router();

//Register Route
router.post('/register', registerController);

//Login Route
router.post('/login', loginController);


module.exports = router;
