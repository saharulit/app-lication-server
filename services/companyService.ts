import {CompanyModel} from '../models/company.model';

export const createCompany = async (companyData: any, userId: string) => {
    const company = new CompanyModel({
        ...companyData,
        user: userId,
    })
    return await company.save();

};

export const getCompaniesByUserId = async (userId: string) => {
    return await CompanyModel.find({user: userId});
}