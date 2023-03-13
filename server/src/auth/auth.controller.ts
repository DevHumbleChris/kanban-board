import { UserDTO } from './../dto/user.dto';
import { NewUserDTO } from './../dto/newuser.dto';
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() data: NewUserDTO) {
    return await this.authService.signup(data);
  }

  @Post('signin')
  async signin(@Body() data: UserDTO) {
    return await this.authService.sigin(data);
  }
}
