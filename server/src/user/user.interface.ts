import {Document} from "mongoose";

export type UserPublicData = Readonly<{
  id: string;
  email: string;
  name: string;
  isActive: boolean;
}>;

export type UserMethods = {
  getPublicData: () => UserPublicData;
};

export type User = Readonly<{
  email: string;
  password: string;
  name: string;
  isActive: boolean;
}> &
  UserMethods &
  Document;
