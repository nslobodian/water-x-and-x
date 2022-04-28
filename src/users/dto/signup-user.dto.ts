import { IsNotEmpty } from 'class-validator'

export class SignupUserDto {
  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  password: string
}
