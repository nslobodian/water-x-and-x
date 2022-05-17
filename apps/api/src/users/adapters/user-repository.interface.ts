import { GenericCreateRepository } from '@shared/repository/generic-create-repository.interface'
import { GenericRetrieveRepository } from '@shared/repository/generic-retrieve-repository.interface'

import { UserEntity } from '@app/users/entity/user.entity'

type UserRepositoryInterface = GenericRetrieveRepository<UserEntity> & GenericCreateRepository<UserEntity>

export default UserRepositoryInterface
