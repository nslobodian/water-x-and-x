import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { HttpValidationError, HttpError } from '@app/rest/swagger/error.model'
import UsersSignUp from '@app/users/usecase/users-signup.usecase'
import SignupUserInput from '@app/users/input/signup-user.input'
import UserProfileOutput from '@app/users/output/user-profile.output'

@ApiTags('Users')
@Controller('/users/signup')
export class UsersSignupAction {
  constructor(private usersSignUp: UsersSignUp) {}

  @ApiOperation({ operationId: 'usersSignup', summary: 'This endpoint retrieve singup new user' })
  @ApiBadRequestResponse({
    type: HttpValidationError,
    description: 'Bad request response'
  })
  @ApiInternalServerErrorResponse({ type: HttpError, description: 'Internal server error response' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: [UserProfileOutput],
    description: 'Success response'
  })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async handle(@Body() input: SignupUserInput): Promise<UserProfileOutput> {
    return await this.usersSignUp.handle(input)
  }
}
