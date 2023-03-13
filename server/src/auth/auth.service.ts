import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup() {
    return 'Signed up route';
  }

  async sigin() {
    return 'Signed in route';
  }
}
