import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { jwtConstants } from '@app/config/jwt.config'
import AuthUser from '@app/auth/dto/auth-user.dto'

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret
    })
  }

  validate(payload: { sub: string; username: string }): Promise<AuthUser> {
    return Promise.resolve({ id: payload.sub, username: payload.username })
  }
}
