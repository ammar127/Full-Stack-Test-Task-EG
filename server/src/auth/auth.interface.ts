import {
  IsEmail,
  MinLength,
  MaxLength,
} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import { Matches } from "class-validator";


export class SignUpDto {
  @ApiProperty({example: "email@email.com", maxLength: 255, required: true})
  @IsEmail()
  @MaxLength(255)
  readonly email!: string;

  @ApiProperty({example: "John Doe", maxLength: 255, required: true})
  @MaxLength(255)
  readonly name!: string;

  @ApiProperty({example: "password", minLength: 8, pattern: "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$", required: true})
  @MinLength(8)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
  readonly password!: string;
}

export class LoginDto {
  @ApiProperty({example: "email@email.com", maxLength: 255})
  @IsEmail()
  @MaxLength(255)
  readonly email!: string;

  @ApiProperty({example: "password", minLength: 8})
  @MinLength(8)
  readonly password!: string;
}
