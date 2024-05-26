import {
  ConflictException,
  NotFoundException,
  ForbiddenException,
  UnauthorizedException,
} from "@nestjs/common";

export const EmailAlreadyUsedException = () =>
  new ConflictException("Email already in use.");

export const UserNotFoundException = () =>
  new NotFoundException("Requested user does not exist.");

export const LoginCredentialsException = () =>
  new UnauthorizedException("Login credentials are wrong.");

export const PasswordCriteriaException = () =>
  new ForbiddenException("Password does not meet criteria.");
