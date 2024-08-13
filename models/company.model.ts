import mongoose, { Document, Schema } from 'mongoose';
import { ICompany } from './type';

const CompanySchema = new Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  logo: { type: String },
});

const CompanyModel = mongoose.model<ICompany & Document>(
  'Company',
  CompanySchema
);

export { CompanyModel };
