export interface GenericCreateRepository<Entity> {
  create(item: Entity): Promise<Entity>
}
