import { Request, Response } from 'express';
import { IUser } from '../models/type';
import {
  getCompaniesByUserId,
} from '../services/companyService';

export const getUserCompanies = async (req: Request, res: Response) => {
  try {
    const authReq = req as Request & { user: IUser };
    const userId = authReq.user?.id;
    const companies = await getCompaniesByUserId(userId);
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch companies by userId' });
  }
};