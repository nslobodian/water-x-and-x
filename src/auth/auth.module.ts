import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { ConfigModule } from '@nestjs/config'

import { UsersModule } from '@app/users/users.module'
import { AuthService } from '@app/auth/auth.service'
import { LocalStrategy } from '@app/auth/strategy/local.strategy'
import { JwtStrategy } from '@app/auth/strategy/jwt.strategy'
import JwtConfig from '@app/config/jwt.config'

@Module({
  imports: [ConfigModule.forFeature(JwtConfig), UsersModule, PassportModule, JwtModule.register({})],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
