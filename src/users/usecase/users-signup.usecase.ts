import { Inject, Injectable, UnprocessableEntityException } from '@nestjs/common'

import { UserEntity } from '@app/users/entity/user.entity'
import SignupUserInput from '@app/users/input/signup-user.input'
import UserPostgresRepository from '@app/users/adapters/user-postgres.repository'
import UserRepositoryInterface from '@app/users/adapters/user-repository.interface'
import UsersNotificationService from '@app/users/notification/users-notification.service'
import UsersService from '@app/users/users.service'
import UserProfileOutput from '@app/users/output/user-profile.output'

@Injectable()
export default class UsersSignUp {
  constructor(
    @Inject(UserPostgresRepository)
    private userRepository: UserRepositoryInterface,
    private usersService: UsersService,
    private usersNotificationService: UsersNotificationService
  ) {}

  async handle(input: SignupUserInput): Promise<UserProfileOutput | undefined> {
    const existingUser = await this.usersService.findOneByUsername(input.username)

    if (existingUser) {
      throw new UnprocessableEntityException('User already exists')
    }

    const userEntity = new UserEntity()
    userEntity.password = input.password
    userEntity.username = input.username

    const user = await this.userRepository.create(userEntity)

    await this.usersNotificationService.userSignedUp(user.id)

    const output = new UserProfileOutput()
    output.id = user.id
    output.username = user.username

    return output
  }
}
