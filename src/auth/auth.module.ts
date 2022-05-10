import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { UsersModule } from '@app/users/users.module'
import AuthService from '@app/auth/auth.service'
import { LocalStrategy } from '@app/auth/strategy/local.strategy'
import { JwtStrategy } from '@app/auth/strategy/jwt.strategy'
import JwtConfig from '@app/config/jwt.config'
import AuthLoginWithCredentials from '@app/auth/usecase/auth-login-with-credentials.usecase'

@Module({
  imports: [
    ConfigModule.forFeature(JwtConfig),
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('jswConfig.secret')
      }),
      inject: [ConfigService]
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, AuthLoginWithCredentials],
  exports: [AuthLoginWithCredentials]
})
export class AuthModule {}
