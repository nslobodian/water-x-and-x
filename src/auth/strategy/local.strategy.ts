import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'

import AuthService from '@app/auth/auth.service'
import AuthUser from '@app/auth/dto/auth-user.dto'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super()
  }

  async validate(username: string, password: string): Promise<AuthUser> {
    const user = await this.authService.validateUserCredentials(username, password)

    if (!user) {
      throw new UnauthorizedException()
    }

    return user
  }
}
