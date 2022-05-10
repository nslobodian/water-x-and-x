import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserEntity } from '@app/users/entity/user.entity'
import UserPostgresRepository from '@app/users/adapters/user-postgres.repository'
import UsersService from '@app/users/users.service'
import UsersNotificationService from '@app/users/notification/users-notification.service'
import UsersSignUp from '@app/users/usecase/users-signup.usecase'
import { NotificationModule } from '@app/notification/notification.module'

@Module({
  imports: [NotificationModule, TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService, UserPostgresRepository, UsersNotificationService, UsersSignUp],
  exports: [UsersService, UsersSignUp]
})
export class UsersModule {}
