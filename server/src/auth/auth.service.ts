/* eslint-disable prettier/prettier */
import { NewUserDTO } from './../dto/newuser.dto';
import { PrismaService } from './../../prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(data: NewUserDTO) {
    const { email, password, username } = data;

    // Check if user exists.
    const user = await this.getUserByEmail(email);

    if(user) {
      throw new BadRequestException("Email Already Exists")
    }

    // Hashed Password.
    const hashedPassword = await this.hashPassword(password);

    return hashedPassword;
  }

  async sigin() {
    return 'Signed in route';
  }

  // Hash Password.
  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  // Compare Password.
  async comparePassword(args: {
    password: string;
    hashedPassword: string;
  }): Promise<boolean> {
    return await bcrypt.compare(args.password, args.hashedPassword);
  }

  // Get User by email.
  async getUserByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        email,
      }
    })
  }
}
