/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Controller, Get, Request, UseGuards } from '@nestjs/common'

import { AppService } from '@app/app.service'
import { JwtAuthGuard } from '@app/auth/guard/jwt-auth.guard'
import AuthUser from '@app/auth/dto/auth-user.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  getUserInfo(@Request() req): AuthUser {
    return req.user as AuthUser
  }

  @Get('/health')
  health(): any {
    return {
      api: true,
      database: false,
      cache: false
    }
  }
}
