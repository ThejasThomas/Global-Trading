import mongoose, { Document } from "mongoose";

export interface IService extends Document {
  name: string;
  details: string;
  more: string;
}

const serviceSchema = new mongoose.Schema<IService>(
  {
    name: { type: String, required: true },
    details: { type: String, required: true },
    more: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IService>("Service", serviceSchema);