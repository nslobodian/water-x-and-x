import { Inject, Injectable, UnprocessableEntityException } from '@nestjs/common'

import UserPostgresRepository from '@app/users/adapters/user-postgres.repository'
import UserRepositoryInterface from '@app/users/adapters/user-repository.interface'
import { UserEntity } from '@app/users/entity/user.entity'
import { SignupUserDto } from '@app/users/dto/signup-user.dto'

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

  async signupUser(userDto: SignupUserDto): Promise<UserEntity | undefined> {
    const existingUser = await this.findOneByUsername(userDto.username)

    if (existingUser) {
      throw new UnprocessableEntityException('User already exists')
    }

    const userEntity = new UserEntity()
    userEntity.password = userDto.password
    userEntity.username = userDto.username

    const user = await this.userRepository.create(userEntity)

    // TODO: notify topic

    return user
  }
}
