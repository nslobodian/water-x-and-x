import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserEntity } from '@app/users/entity/user.entity'
import UserPostgresRepository from '@app/users/adapters/user-postgres.repository'
import UsersService from '@app/users/users.service'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService, UserPostgresRepository],
  exports: [UsersService]
})
export class UsersModule {}
