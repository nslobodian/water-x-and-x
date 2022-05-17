import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { UserEntity } from '@app/users/entity/user.entity'
import { GenericPostgresRepository } from '@app/shared/repository/generic-postgres.repository'
import UserRepositoryInterface from '@app/users/adapters/user-repository.interface'

@Injectable()
export default class UserPostgresRepository extends GenericPostgresRepository<UserEntity> implements UserRepositoryInterface {
  constructor(
    @InjectRepository(UserEntity)
    repository: Repository<UserEntity>
  ) {
    super(repository)
  }
}
