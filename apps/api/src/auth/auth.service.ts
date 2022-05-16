import { Injectable } from '@nestjs/common'
import { compare } from 'bcrypt'

import UsersService from '@app/users/users.service'
import AuthUser from '@app/auth/dto/auth-user.dto'

@Injectable()
export default class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUserCredentials(username: string, password: string): Promise<AuthUser> {
    const user = await this.usersService.findOneByUsername(username)

    if (user && (await compare(password, user.password))) {
      const authUser = new AuthUser()
      authUser.id = user.id
      authUser.username = user.username
      return authUser
    }

    return null
  }
}
