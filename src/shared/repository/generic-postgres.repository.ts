import { DeepPartial, FindConditions, Repository } from 'typeorm'

import { GenericCreateRepository } from '@app/shared/repository/generic-create-repository.interface'
import { GenericRetrieveRepository } from '@app/shared/repository/generic-retrieve-repository.interface'
import { GenericUpdateRepository } from '@app/shared/repository/generic-update-repository.interface'

export class GenericPostgresRepository<Entity>
  implements GenericCreateRepository<Entity>, GenericRetrieveRepository<Entity>, GenericUpdateRepository<Entity>
{
  constructor(private repository: Repository<Entity>) {}

  async update(query: Record<string, unknown>, item: Entity): Promise<void> {
    await this.repository.update(query as FindConditions<Entity>, item)
  }

  findOneById(id: string): Promise<Entity> {
    return this.repository.findOne(id)
  }

  findByQuery(query: Record<string, unknown>): Promise<Entity[]> {
    return this.repository.find(query)
  }

  async create(item: Entity): Promise<Entity> {
    const instance = this.repository.create(item as DeepPartial<Entity>)
    return (await this.repository.save(instance as DeepPartial<Entity>)) as unknown as Entity
  }
}
