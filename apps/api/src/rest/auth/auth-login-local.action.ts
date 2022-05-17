import { Controller, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common'
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '@nestjs/passport'

import { HttpValidationError, HttpError } from '@app/rest/swagger/error.model'
import AuthTokenOutput from '@app/auth/output/token.output'
import AuthLoginWithCredentials from '@app/auth/usecase/auth-login-with-credentials.usecase'
import AuthUser from '@app/auth/dto/auth-user.dto'

@ApiTags('Auth')
@UseGuards(AuthGuard('local'))
@Controller('/auth/login')
export class AuthLoginLocalAction {
  constructor(private authLoginWithCredentials: AuthLoginWithCredentials) {}

  @ApiOperation({ operationId: 'authLoginLocal', summary: 'This endpoint retrieve auth token' })
  @ApiBadRequestResponse({
    type: HttpValidationError,
    description: 'Bad request response'
  })
  @ApiInternalServerErrorResponse({ type: HttpError, description: 'Internal server error response' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: [AuthTokenOutput],
    description: 'Success response'
  })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  handle(@Request() req: { user: AuthUser }): AuthTokenOutput {
    return this.authLoginWithCredentials.handle(req.user)
  }
}
