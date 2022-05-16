import { GenericRetrieveRepository } from '@shared/repository/generic-retrieve-repository.interface'

import RoomEntity from '@app/room/entity/room.entity'

type RoomRepositoryInterface = GenericRetrieveRepository<RoomEntity>

export default RoomRepositoryInterface
