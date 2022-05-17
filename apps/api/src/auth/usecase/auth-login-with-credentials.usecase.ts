import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import AuthUser from '@app/auth/dto/auth-user.dto'
import AuthTokenOutput from '@app/auth/output/token.output'

@Injectable()
export default class AuthLoginWithCredentials {
  constructor(private jwtTokenService: JwtService) {}

  handle(input: AuthUser): AuthTokenOutput {
    const payload = { username: input.username, sub: input.id }

    return {
      access_token: this.jwtTokenService.sign(payload)
    }
  }
}
