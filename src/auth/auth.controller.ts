import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { config } from 'process';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    getHello():string {
      this.authService.signUp({
        email: process.env.MAIL_FROM,
        name: "test"
      });
      return "nice try";
    }

}
