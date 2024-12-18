import mongoose, { Document, Schema } from 'mongoose';
import { ICompany } from './type';

const CompanySchema = new Schema({
  name: { type: String, required: true },
  domain: {type: String},
  description: { type: String },
  logo: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const CompanyModel = mongoose.model<ICompany & Document>(
  'Company',
  CompanySchema
);

export { CompanyModel };
