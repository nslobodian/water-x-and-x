import { Inject, Injectable, NotFoundException } from '@nestjs/common'

import HostProfileOutput from '@app/users/output/host-profile.output'
import UserRepositoryInterface from '@app/users/adapters/user-repository.interface'
import UserPostgresRepository from '@app/users/adapters/user-postgres.repository'

@Injectable()
export default class UserRetrieve {
  constructor(
    @Inject(UserPostgresRepository)
    private userRepository: UserRepositoryInterface
  ) {}

  async handle(id: string): Promise<HostProfileOutput> {
    const user = await this.userRepository.findOneById(id)

    if (!user) {
      throw new NotFoundException('Cannot retrieve user with userId: ', id)
    }

    return {
      id: user.id,
      username: user.username
    }
  }
}
