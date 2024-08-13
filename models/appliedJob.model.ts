import mongoose, { Document, Schema } from 'mongoose';
import { IAppliedJob, Status } from './type';

const AppliedJobSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    // company: { type: Schema.Types.ObjectId, ref: 'Company', required: true }, // Reference to Company
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
