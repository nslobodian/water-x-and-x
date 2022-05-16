import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Injectable } from '@nestjs/common'

import { Room } from '@app/graphql/models/room.model'
import RoomRetrieve from '@app/room/usecase/room-retrieve.usecase'
import UserRetrieve from '@app/users/usecase/user-retrieve.usecase'
import { Host } from '@app/graphql/models/host.model'

@Resolver((of) => Room)
@Injectable()
export default class RoomResolver {
  constructor(private roomRetrieve: RoomRetrieve, private userRetrieve: UserRetrieve) {}

  @Query(() => Room)
  async room(@Args('id') id: string): Promise<Room> {
    return this.roomRetrieve.handle(id)
  }

  @ResolveField()
  async host(@Parent() room: Room): Promise<Host> {
    const { hostId } = room
    return await this.userRetrieve.handle(hostId)
  }
}
