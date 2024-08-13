import { Request, Response } from 'express';
import { AppliedJobModel } from '../models/appliedJob.model';
import { createJobApplication } from '../services/appliedJobService';

// Create a new job application
export const createAppliedJob = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const savedJob = await createJobApplication(req.body);
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create job application' });
  }
};
/*
// Get all job applications
export const getAppliedJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await AppliedJobModel.find().populate('company');
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch job applications' });
  }
};

// Get a single job application by ID
export const getAppliedJobById = async (req: Request, res: Response) => {
  try {
    const job = await AppliedJobModel.findById(req.params.id).populate(
      'company'
    );
    if (job) {
      res.status(200).json(job);
    } else {
      res.status(404).json({ error: 'Job application not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch job application' });
  }
};

// Update a job application
export const updateAppliedJob = async (req: Request, res: Response) => {
  try {
    const updatedJob = await AppliedJobModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedJob) {
      res.status(200).json(updatedJob);
    } else {
      res.status(404).json({ error: 'Job application not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update job application' });
  }
};

// Delete a job application
export const deleteAppliedJob = async (req: Request, res: Response) => {
  try {
    const deletedJob = await AppliedJobModel.findByIdAndDelete(req.params.id);
    if (deletedJob) {
      res.status(200).json({ message: 'Job application deleted' });
    } else {
      res.status(404).json({ error: 'Job application not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete job application' });
  }
};
*/
