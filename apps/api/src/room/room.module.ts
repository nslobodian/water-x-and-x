import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import RoomEntity from '@app/room/entity/room.entity'
import RoomRetrieve from '@app/room/usecase/room-retrieve.usecase'
import RoomPostgresRepository from '@app/room/adapters/room-postgres.repository'

@Module({
  imports: [TypeOrmModule.forFeature([RoomEntity])],
  providers: [RoomRetrieve, RoomPostgresRepository],
  exports: [RoomRetrieve, RoomPostgresRepository]
})
export class RoomModule {}
