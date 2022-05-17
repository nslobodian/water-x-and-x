import { PubSub, Message as PubsubMessage } from '@google-cloud/pubsub'
import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import MessageInterface from '@lib/notification/message.interface'

import PubSubConfig from './pubsub.config'

@Injectable()
export default class NotificationConsumerService {
  private pubSub: PubSub

  constructor(@Inject(PubSubConfig.KEY) config: ConfigType<typeof PubSubConfig>) {
    this.pubSub = new PubSub({
      projectId: config.projectId
    })
  }

  async consumeMessage(topicName: string, subscriptionName: string): Promise<void> {
    const [topic] = await this.pubSub.createTopic(topicName)
    console.log(`Topic ${topic.name} created.`)

    // Creates a subscription on that new topic
    const [subscription] = await topic.createSubscription(subscriptionName)

    // Receive callbacks for new messages on the subscription
    subscription.on('message', (message: PubsubMessage) => {
      const messageDto = JSON.parse(message.data.toString()) as MessageInterface

      console.log('Received message: ', messageDto)
    })

    // Receive callbacks for errors on the subscription
    subscription.on('error', (error) => {
      console.error('Received error:', error)
    })
  }
}
