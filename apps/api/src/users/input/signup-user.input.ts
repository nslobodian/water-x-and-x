import { IsNotEmpty } from 'class-validator'

export default class SignupUserInput {
  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  password: string
}
