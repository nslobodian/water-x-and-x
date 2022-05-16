import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { ConfigType } from '@nestjs/config'
import { Inject, Injectable } from '@nestjs/common'

import JwtConfig from '@app/config/jwt.config'
import AuthUser from '@app/auth/dto/auth-user.dto'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(JwtConfig.KEY) config: ConfigType<typeof JwtConfig>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      signOptions: { expiresIn: '60M' },
      secretOrKey: config.secret
    })
  }

  validate(payload: { sub: string; username: string }): Promise<AuthUser> {
    return Promise.resolve({ id: payload.sub, username: payload.username })
  }
}
