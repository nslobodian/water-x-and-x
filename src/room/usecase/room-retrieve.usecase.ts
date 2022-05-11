import { Inject, Injectable, NotFoundException } from '@nestjs/common'

import RoomDto from '@app/room/dto/room.dto'
import RoomRepositoryInterface from '@app/room/adapters/room-repository.interface'
import RoomPostgresRepository from '@app/room/adapters/room-postgres.repository'

@Injectable()
export default class RoomRetrieve {
  constructor(
    @Inject(RoomPostgresRepository)
    private roomRepository: RoomRepositoryInterface
  ) {}

  async handle(id: string): Promise<RoomDto> {
    const room = await this.roomRepository.findOneById(id)

    if (!room) {
      throw new NotFoundException('Cannot retrieve room with id: ', id)
    }

    return {
      id: room.id,
      name: room.name,
      city: room.city,
      country: room.country,
      description: room.description,
      hostId: room.hostId
    }
  }
}
