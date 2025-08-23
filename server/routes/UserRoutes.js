import express from 'express';
const router = express.Router();
import {
  registerUser,
  loginUser,
  getUserProfile,
} from '../controllers/UserController.js'; // <-- Corrected capitalization
import { protect } from '../middleware/AuthMiddleware.js'; // <-- Corrected capitalization

// Defines the endpoint for registering a new user
router.post('/register', registerUser);

// Defines the endpoint for logging in a user
router.post('/login', loginUser);

// Defines a protected endpoint to get a user's profile
router.get('/profile', protect, getUserProfile);

export default router;