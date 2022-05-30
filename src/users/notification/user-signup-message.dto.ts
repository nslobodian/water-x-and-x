import { MessageInterface } from 'water-common'

export class UserSingupMessage implements MessageInterface {
  type: string
  data: {
    userId: string
  }
}
