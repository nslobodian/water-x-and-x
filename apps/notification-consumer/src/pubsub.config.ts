import { registerAs } from '@nestjs/config'

export default registerAs('pubsubConfig', () => ({
  projectId: 'example-projectId',
  userTopic: 'user-topic'
}))
