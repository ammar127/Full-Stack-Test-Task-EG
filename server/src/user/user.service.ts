import { Model } from "mongoose";
import { v4 as uuid } from "uuid";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import config from "../config";
import { hashPassword } from "../common/auth";
import {
  UserNotFoundException,
  EmailAlreadyUsedException,
} from "../common/exceptions";

import { User } from "./user.interface";

@Injectable()
export class UserService {
  constructor(
    @InjectModel("User") private readonly userModel: Model<User>,
  ) { }
  /**
   * Creates user and sends activation email.
   * @throws duplicate key error when
   */
  async create(email: string, password: string, origin: string): Promise<User> {
    try {
      const user = await this.userModel.create({
        email: email.toLowerCase(),
        name: email.toLowerCase(),
        password: await hashPassword(password),
      });


      return user;
    } catch {
      throw EmailAlreadyUsedException();
    }
  }

  async findById(id: string): Promise<User> {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw UserNotFoundException();
    }

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne(
      { email: email.toLowerCase() },
      "+password",
    );

    if (!user) {
      throw UserNotFoundException();
    }

    return user;
  }

}
