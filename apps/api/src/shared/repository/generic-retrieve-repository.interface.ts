export interface GenericRetrieveRepository<Entity> {
  findOneById(id: string): Promise<Entity>
  findByQuery(query: Record<string, unknown>): Promise<Entity[]>
}
