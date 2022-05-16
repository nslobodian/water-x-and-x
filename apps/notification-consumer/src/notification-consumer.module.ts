import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { NotificationConsumerController } from './notification-consumer.controller'
import NotificationConsumerService from './notification-consumer.service'
import pubsubConfig from './pubsub.config'

@Module({
  imports: [ConfigModule.forFeature(pubsubConfig)],
  controllers: [NotificationConsumerController],
  providers: [NotificationConsumerService]
})
export class NotificationConsumerModule {}
