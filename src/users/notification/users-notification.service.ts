import { Injectable } from '@nestjs/common'

import NotificationService from '@app/notification/notification.service'
import NotificationTopic from '@app/notification/topic.enum'

import { UserSingupMessage } from './user-signup-message.dto'

@Injectable()
export default class UsersNotificationService {
  constructor(private notificationService: NotificationService) {}

  async userSignedUp(userId: string): Promise<void> {
    const dto: UserSingupMessage = {
      type: NotificationTopic.USER,
      data: {
        userId
      }
    }
    await this.notificationService.publishMessage(NotificationTopic.USER, dto)
  }
}
