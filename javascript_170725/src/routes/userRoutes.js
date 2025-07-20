const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { userValidationRules, validate } = require('../middlewares/validation');

// Register
router.post('/register', userValidationRules, validate, userController.register);
// Login
router.post('/login', [
    require('express-validator').body('email').isEmail().withMessage('Email must be valid'),
    require('express-validator').body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    validate
], userController.login);

// Create user (admin or for testing)
router.post('/', userValidationRules, validate, userController.createUser);
// Get all users
router.get('/', userController.getUsers);
// Get user by ID
router.get('/:id', userController.getUserById);
// Update user
router.put('/:id', userValidationRules, validate, userController.updateUser);
// Delete user
router.delete('/:id', userController.deleteUser);

module.exports = router; 