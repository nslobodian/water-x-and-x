import { Module } from '@nestjs/common'

import { AuthLoginLocalAction } from '@app/rest/auth/auth-login-local.action'
import { UsersModule } from '@app/users/users.module'
import { AuthModule } from '@app/auth/auth.module'

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AuthLoginLocalAction]
})
export class RestModule {}
