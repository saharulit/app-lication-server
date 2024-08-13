import { AppliedJobModel } from '../models/appliedJob.model';

// Service to create a new job application
export const createJobApplication = async (jobData: any) => {
  const appliedJob = new AppliedJobModel(jobData);
  return await appliedJob.save();
};
/*
// Service to get all job applications
export const fetchAllJobs = async () => {
  return await AppliedJobModel.find().populate('company');
};

// Service to get a job application by ID
export const fetchJobById = async (jobId: string) => {
  return await AppliedJobModel.findById(jobId).populate('company');
};

// Service to update a job application by ID
export const updateJobApplication = async (jobId: string, updateData: any) => {
  return await AppliedJobModel.findByIdAndUpdate(jobId, updateData, {
    new: true,
  });
};

// Service to delete a job application by ID
export const deleteJobApplication = async (jobId: string) => {
  return await AppliedJobModel.findByIdAndDelete(jobId);
};
*/