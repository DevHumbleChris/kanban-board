/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  @Length(6, 30, { message: 'Password should be between 8 - 30 characters.' })
  public password: string;

  @IsEmail()
  public email: string;
}
