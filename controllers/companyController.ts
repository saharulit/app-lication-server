import { Request, Response } from 'express';
import { searchCompanyLogo } from '../services/external/logoService';

export const searchCompanies = async (req: Request, res: Response) => {
  try {
    const query = (req?.query?.query as string) || '';
    const companies = await searchCompanyLogo(query);
    res.status(200).json(companies);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
};
