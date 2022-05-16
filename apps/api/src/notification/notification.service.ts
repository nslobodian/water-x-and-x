import { PubSub } from '@google-cloud/pubsub'
import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import MessageInterface from '@shared/message.interface'

import PubSubConfig from '@app/config/pubsub.config'

@Injectable()
export default class NotificationService {
  private pubSub: PubSub

  constructor(@Inject(PubSubConfig.KEY) config: ConfigType<typeof PubSubConfig>) {
    this.pubSub = new PubSub({
      projectId: config.projectId
    })
  }

  async publishMessage(topicName: string, dto: MessageInterface): Promise<void> {
    const dataBuffer = Buffer.from(JSON.stringify(dto))

    await this.pubSub.topic(topicName).publishMessage({ data: dataBuffer })
  }
}
