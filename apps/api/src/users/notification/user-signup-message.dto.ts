import MessageInterface from '@lib/notification/message.interface'

export class UserSingupMessage implements MessageInterface {
  type: string
  data: {
    userId: string
  }
}
