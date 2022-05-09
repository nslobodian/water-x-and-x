import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import NotificationService from '@app/notification/notification.service'
import PubsubConfig from '@app/config/pubsub.config'

@Module({
  imports: [ConfigModule.forFeature(PubsubConfig)],
  providers: [NotificationService],
  exports: [NotificationService]
})
export class NotificationModule {}
