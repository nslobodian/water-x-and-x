/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { AppService } from '@app/app.service'
import { AuthService } from '@app/auth/auth.service'
import { JwtAuthGuard } from '@app/auth/guard/jwt-auth.guard'
import AuthUser from '@app/auth/dto/auth-user.dto'
import UsersService from '@app/users/users.service'
import { SignupUserDto } from '@app/users/dto/signup-user.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService, private userService: UsersService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req): any {
    return this.authService.loginWithCredentials(req.user as AuthUser)
  }

  @Post('signup')
  signup(@Body() userDto: SignupUserDto): any {
    return this.userService.signupUser(userDto)
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
