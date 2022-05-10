import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'

import { AppController } from '@app/app.controller'
import { AppService } from '@app/app.service'
import { AuthModule } from '@app/auth/auth.module'
import { UsersModule } from '@app/users/users.module'
import { NotificationModule } from '@app/notification/notification.module'
import { RestModule } from '@app/rest/rest.module'
import TypeOrmConfigService from '@app/config/postgres.config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService
    }),
    AuthModule,
    UsersModule,
    NotificationModule,
    RestModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
