import asyncHandler from 'express-async-handler';
import Job from '../models/Job.js';

// @desc    Create a new job
// @route   POST /api/jobs
const createJob = asyncHandler(async (req, res) => {
  const { title, company, location, description, salary, jobType } = req.body;

  const job = new Job({
    user: req.user._id, // Link to the logged-in user
    title,
    company,
    location,
    description,
    salary,
    jobType,
  });

  const createdJob = await job.save();
  res.status(201).json(createdJob);
});

// @desc    Get all jobs
// @route   GET /api/jobs
const getAllJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find({}).populate('user', 'name email');
  res.json(jobs);
});

// @desc    Get job by ID
// @route   GET /api/jobs/:id
const getJobById = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (job) {
    res.json(job);
  } else {
    res.status(404);
    throw new Error('Job not found');
  }
});

// @desc    Update a job
// @route   PUT /api/jobs/:id
const updateJob = asyncHandler(async (req, res) => {
  const { title, company, location, description, salary, jobType } = req.body;
  const job = await Job.findById(req.params.id);

  if (job) {
    // Check if the user owns this job posting
    if (job.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('User not authorized');
    }

    job.title = title || job.title;
    job.company = company || job.company;
    job.location = location || job.location;
    job.description = description || job.description;
    job.salary = salary || job.salary;
    job.jobType = jobType || job.jobType;

    const updatedJob = await job.save();
    res.json(updatedJob);
  } else {
    res.status(404);
    throw new Error('Job not found');
  }
});

// @desc    Delete a job
// @route   DELETE /api/jobs/:id
const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (job) {
    // Check if the user owns this job posting
    if (job.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('User not authorized');
    }

    await job.deleteOne();
    res.json({ message: 'Job removed' });
  } else {
    res.status(404);
    throw new Error('Job not found');
  }
});

export { createJob, getAllJobs, getJobById, updateJob, deleteJob };