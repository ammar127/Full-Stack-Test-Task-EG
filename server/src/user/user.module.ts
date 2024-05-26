import {Module} from "@nestjs/common";

import {UserService} from "./user.service";
import {UserModel} from "./user.model";

@Module({
  imports: [UserModel],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
