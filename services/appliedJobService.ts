import { AppliedJobModel } from '../models/appliedJob.model';
import { Filters } from '../models/type';

export const createJobApplication = async (jobData: any, userId: string) => {
  const appliedJob = new AppliedJobModel({
    ...jobData,
    user: userId,
  });

  return await appliedJob.save();
};

export const fetchUserAppliedJobs = async (
  userId: string,
  filters?: Filters
) => {
  const query: any = { user: userId };

  // Apply search term filter
  if (filters?.search) {
    query.$or = [
      { title: { $regex: filters.search, $options: 'i' } },
      { 'company.name': { $regex: filters.search, $options: 'i' } },
    ];
  }
  if (filters?.status && filters.status.length > 0) {
    query.status = { $in: filters.status };
  }
  return await AppliedJobModel.find(query).populate('company');
};

// Service to get a job application by ID
export const fetchJobById = async (jobId: string) => {
  return await AppliedJobModel.findById(jobId).populate('company');
};
/*
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
