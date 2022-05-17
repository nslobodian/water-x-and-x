import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { GenericPostgresRepository } from '@app/shared/repository/generic-postgres.repository'
import RoomEntity from '@app/room/entity/room.entity'
import RoomRepositoryInterface from '@app/room/adapters/room-repository.interface'

@Injectable()
export default class RoomPostgresRepository extends GenericPostgresRepository<RoomEntity> implements RoomRepositoryInterface {
  constructor(
    @InjectRepository(RoomEntity)
    repository: Repository<RoomEntity>
  ) {
    super(repository)
  }
}
