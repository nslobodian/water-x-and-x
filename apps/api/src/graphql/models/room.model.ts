import { Field, ID, ObjectType } from '@nestjs/graphql'

import { Host } from '@app/graphql/models/host.model'

@ObjectType({ description: 'room' })
export class Room {
  @Field((type) => ID)
  id: string

  @Field({ nullable: true })
  name: string

  @Field()
  city: string

  @Field()
  country: string

  @Field()
  description: string

  @Field({ nullable: true })
  hostId: string

  @Field((type) => Host)
  host?: Host
}
