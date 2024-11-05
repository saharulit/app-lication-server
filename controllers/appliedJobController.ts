import { Request, Response } from 'express';
import {
  createJobApplication,
  fetchUserAppliedJobs,
} from '../services/appliedJobService';
import { Filters, IUser, Status } from '../models/type';
import { createCompany } from '../services/companyService';

export const createAppliedJob = async (req: Request, res: Response) => {
  const authReq = req as Request & { user: IUser };
  const userId = authReq.user?.id;
  try {
    //search for company or create if not have one
    let companyId = req.body.company.id;
    if (!companyId) {
      try {
        const company = await createCompany(req.body.company, userId);
        companyId = company._id;
      } catch (error) {
        res.status(500).json({ error: `Failed to create company ${error}` });
      }
    }
    const newApplication = { ...req.body, company: companyId };
    const savedJob = await createJobApplication(newApplication, userId);
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create job application' });
  }
};
export const getUserAppliedJobs = async (req: Request, res: Response) => {
  try {
    const authReq = req as Request & { user: IUser };
    const userId = authReq.user?.id;

    let filters: Filters = {
      search: '',
      status: [],
    };

    if (req.query) {
      const search = (req.query.search as string) || '';
      const statusQuery = req.query.status as string;
      if (statusQuery) {
        filters.status = statusQuery.split(',') as Status[];
      }
      filters.search = search;
    }

    const jobs = await fetchUserAppliedJobs(userId, filters);
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch job applications' });
  }
};

/*
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
