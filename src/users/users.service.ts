import { Inject, Injectable } from '@nestjs/common'

import UserPostgresRepository from '@app/users/adapters/user-postgres.repository'
import UserRepositoryInterface from '@app/users/adapters/user-repository.interface'
import { UserEntity } from '@app/users/entity/user.entity'

@Injectable()
export default class UsersService {
  constructor(
    @Inject(UserPostgresRepository)
    private userRepository: UserRepositoryInterface
  ) {}

  async findOneByUsername(username: string): Promise<UserEntity | undefined> {
    const users = await this.userRepository.findByQuery({ username })

    return users[0]
  }
}
