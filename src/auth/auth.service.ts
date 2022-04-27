import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import UsersService from '@app/users/users.service'
import AuthUser from '@app/auth/dto/auth-user.dto'
import { AuthTokenDto } from '@app/auth/dto/token.dto'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtTokenService: JwtService) {}

  async validateUserCredentials(username: string, password: string): Promise<AuthUser> {
    const user = await this.usersService.findOneByUsername(username)

    if (user && user.password === password) {
      const authUser = new AuthUser()
      authUser.id = user.id
      authUser.username = user.username
      return authUser
    }

    return null
  }

  loginWithCredentials(user: AuthUser): AuthTokenDto {
    const payload = { username: user.username, sub: user.id }

    return {
      access_token: this.jwtTokenService.sign(payload)
    }
  }
}
