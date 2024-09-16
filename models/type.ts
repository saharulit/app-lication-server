export interface IUser extends Document {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword: (password: string) => Promise<boolean>;
}
export interface ICompany extends Document {
  id: string;
  user: IUser;
  name: string;
  description?: string;
  logo?: string;
}

export interface IAppliedJob extends Document {
  id: string;
  user: IUser;
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
