import { Schema } from "mongoose";

export const PostSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  dateCreated: { type: Date },
  likes: { type: Number, default: 0 },
});
