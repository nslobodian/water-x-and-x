import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

import RoomResolver from '@app/graphql/resolver/room.resolver'
import { RoomModule } from '@app/room/room.module'
import { UsersModule } from '@app/users/users.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql'
    }),
    RoomModule,
    UsersModule
  ],
  providers: [RoomResolver]
})
export class GraphqlModule {}
