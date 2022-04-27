export interface GenericUpdateRepository<Entity> {
  update(query: Record<string, unknown>, item: Entity): Promise<void>
}
