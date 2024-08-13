export interface ICompany extends Document {
  userId: string;
  name: string;
  description?: string;
  logo?: string;
}

export interface IAppliedJob extends Document {
  title: string;
  description?: string;
  company: ICompany;
  applicationLink?: string;
  applicationDate?: Date;
  status: Status;
  comments?: string;
}

export enum Status {
  APPLIED = 'Applied',
  INTERVIEW = 'Interview',
  REJECTED = 'Rejected',
  HIRED = 'Hired',
}
