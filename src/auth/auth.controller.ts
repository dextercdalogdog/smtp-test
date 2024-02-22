import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    getHello():string {
      this.authService.signUp({
        email: "dexter@hyperstacksinc.com",
        name: "test"
      });
      return "nice try";
    }

}
