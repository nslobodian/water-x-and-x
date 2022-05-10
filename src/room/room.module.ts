import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import RoomEntity from '@app/room/entity/room.entity'

@Module({
  imports: [TypeOrmModule.forFeature([RoomEntity])]
})
export class RoomModule {}
