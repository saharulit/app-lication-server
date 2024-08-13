import { Router } from 'express';
import { createAppliedJob } from '../controllers/appliedJobController';

const router = Router();

// Route to create a new job application
router.post('/applied-jobs', createAppliedJob);
/*
// Route to get all job applications
router.get('/applied-jobs', getAppliedJobs);

// Route to get a specific job application by ID
router.get('/applied-jobs/:id', getAppliedJobById);

// Route to update a job application by ID
router.put('/applied-jobs/:id', updateAppliedJob);

// Route to delete a job application by ID
router.delete('/applied-jobs/:id', deleteAppliedJob);
*/
export default router;
