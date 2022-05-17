import { registerAs } from '@nestjs/config'

export default registerAs('jswConfig', () => ({
  secret: 'secretKey'
}))
