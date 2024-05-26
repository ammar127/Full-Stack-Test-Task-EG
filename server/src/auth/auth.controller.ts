import {
  Controller,
  Get,
  Post,
  Req,
  Param,
  UseGuards,
  Body,
} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";
import {Request} from "express";

import {

  SignUpDto,
  LoginDto,
} from "./auth.interface";
import {AuthService} from "./auth.service";
import {getOriginHeader} from "../common/auth";
import {ApiTags} from "@nestjs/swagger";
import { User } from "src/user/user.interface";

@ApiTags("auth")
@Controller("api")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard("local"))
  @Post("login")
  login(@Req() req: Request, @Body() loginDto: LoginDto) {
    // TODO: remove loginDto, swagger should find it somehow by exploring the AuthGuard
    return this.authService.login(req.user as User);
  }

  @Post("signup")
  async signup(@Body() signUpDto: SignUpDto, @Req() req: Request) {
    return this.authService.signUpUser(signUpDto, getOriginHeader(req));
  }

  @UseGuards(AuthGuard())
  @Get("me")
  getProfile(@Req() req: Request) {
    return req.user;
  }

  @UseGuards(AuthGuard())
  @Get("relogin")
  relogin(@Req() req: Request) {
    return this.authService.login(req.user as User);
  }

}
