import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType({ description: 'host' })
export class Host {
  @Field((type) => ID)
  id: string

  @Field({})
  username: string
}
