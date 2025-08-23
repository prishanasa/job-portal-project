import express from 'express';
const router = express.Router();
import {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
} from '../controllers/JobsController.js'; // <-- Corrected capitalization
import { protect } from '../middleware/AuthMiddleware.js'; // <-- Corrected capitalization

// Public route to get all jobs
router.get('/', getAllJobs);

// Protected route to create a new job
router.post('/', protect, createJob);

// Routes for a specific job by its ID
router
  .route('/:id')
  .get(getJobById)
  .put(protect, updateJob) // Protected
  .delete(protect, deleteJob); // Protected

export default router;