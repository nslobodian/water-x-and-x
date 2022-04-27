import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { UsersModule } from '@app/users/users.module'
import { AuthService } from '@app/auth/auth.service'
import { jwtConstants } from '@app/config/jwt.config'
import { LocalStrategy } from '@app/auth/strategy/local.strategy'
import { JwtStrategy } from '@app/auth/strategy/jwt.strategy'

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60M' }
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
