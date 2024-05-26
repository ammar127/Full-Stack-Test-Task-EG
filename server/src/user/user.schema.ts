import * as mongoose from "mongoose";

import {User} from "./user.interface";

export const UserSchema = new mongoose.Schema<User>(
  {
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true, select: false},
    isActive: {type: Boolean, default: true},
  },
  {timestamps: true},
);

/**
 * Methods.
 */
UserSchema.methods.getPublicData = function () {
  const {id, email, isActive} = this;
  return {id, email, isActive};
};
