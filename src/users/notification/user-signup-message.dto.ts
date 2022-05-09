import MessageInterface from '@shared/message.interface'

export class UserSingupMessage implements MessageInterface {
  type: string
  data: {
    userId: string
  }
}
