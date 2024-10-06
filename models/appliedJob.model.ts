import mongoose, { Document, Schema, SchemaType } from 'mongoose';
import { IAppliedJob, Status } from './type';

const AppliedJobSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', require: true },
    title: { type: String, required: true },
    description: { type: String },
    company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
    applicationLink: { type: String },
    applicationDate: { type: Date },
    status: {
      type: String,
      enum: Status,
      required: true,
      default: Status.APPLIED,
    },
    comments: { type: String },
  },
  {
    timestamps: true,
  }
);

const AppliedJobModel = mongoose.model<IAppliedJob & Document>(
  'AppliedJob',
  AppliedJobSchema
);

export { AppliedJobModel };
