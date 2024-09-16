import { AppliedJobModel } from '../models/appliedJob.model';

export const createJobApplication = async (jobData: any, userId: string) => {
  const appliedJob = new AppliedJobModel({
    ...jobData,
    user: userId,
  });

  return await appliedJob.save();
};

export const fetchUserAppliedJobs = async (userId: string) => {
  return await AppliedJobModel.find({ user: userId });
};
/*
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
