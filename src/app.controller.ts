import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AppService } from '@app/app.service';
import { AuthService } from '@app/auth/auth.service';
import { JwtAuthGuard } from '@app/auth/guard/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.loginWithCredentials(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  getUserInfo(@Request() req) {
    return req.user;
  }

  @Get('/health')
  health(): any {
    return {
      api: true,
      database: false,
      cache: false,
    };
  }
}
