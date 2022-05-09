import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserEntity } from '@app/users/entity/user.entity'
import UserPostgresRepository from '@app/users/adapters/user-postgres.repository'
import UsersService from '@app/users/users.service'
import UsersNotificationService from '@app/users/notification/users-notification.service'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService, UserPostgresRepository, UsersNotificationService],
  exports: [UsersService]
})
export class UsersModule {}
