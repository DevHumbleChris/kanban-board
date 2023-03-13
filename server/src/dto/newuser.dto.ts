/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class NewUserDTO {
  @IsNotEmpty()
  @IsString()
  @Length(6, 30, { message: 'Username should be between 6 - 30 characters.' })
  public username: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 30, { message: 'Password should be between 8 - 30 characters.' })
  public password: string;

  @IsEmail()
  public email: string;
}
