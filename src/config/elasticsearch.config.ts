import { registerAs } from '@nestjs/config'

export default registerAs('elasticsearchConfig', () => ({
  elasticUrl: process.env.ELASTIC_URL || 'http://localhost:9200'
}))
