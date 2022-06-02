import { Client } from '@elastic/elasticsearch'
import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'

import ElasticSearchConfig from '@app/config/elasticsearch.config'
import SearchEngineInterface from './search-engine.interface'

// const elasticUrl = process.env.ELASTIC_URL || 'http://localhost:9200'

@Injectable()
export default class ElasticSearchClient implements SearchEngineInterface {
  private esclient: Client

  constructor(@Inject(ElasticSearchConfig.KEY) config: ConfigType<typeof ElasticSearchConfig>) {
    this.esclient = new Client({ node: config.elasticUrl })
  }
}
