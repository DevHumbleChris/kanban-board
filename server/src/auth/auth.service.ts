/* eslint-disable prettier/prettier */
import { jwtSecret } from './../utils/constants';
import { NewUserDTO } from './../dto/newuser.dto';
import { PrismaService } from './../../prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signup(data: NewUserDTO) {
    const { email, password, username } = data;

    // Check if user exists.
    const user = await this.getUserByEmail(email);

    if (user) {
      throw new BadRequestException('Email Already Exists');
    }

    // Hashed Password.
    const hashedPassword = await this.hashPassword(password);

    // get access tokens.
    const token = await this.signTokens({ email, username });

    // new user.
    const newUser = await this.createNewUser({
      email,
      username,
      password: hashedPassword,
      accessToken: token,
    });

    return {
      user: {
        email: newUser.email,
        username: newUser.username,
        createdAt: newUser.createdAt
      },
      accessToken: newUser.accessToken,
      message: 'Signed up successfull!',
      loggedIn: true
    };
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
      },
    });
  }

  // create new user.
  async createNewUser(args: {
    email: string;
    username: string;
    password: string;
    accessToken: string;
  }): Promise<User> {
    const { email, username, password, accessToken } = args;
    return await this.prisma.user.create({
      data: {
        email,
        username,
        password,
        accessToken,
      },
    });
  }

  // sign tokens.
  async signTokens(payload: { email: string; username: string }): Promise<string> {
    return await this.jwtService.sign(payload, {
      secret: jwtSecret,
    });
  }
}
