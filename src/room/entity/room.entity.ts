import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('rooms')
export default class RoomEntity {
  @PrimaryGeneratedColumn('uuid') id: string

  @Column({ type: 'varchar' })
  name: string

  @Column({ type: 'varchar' })
  city: string

  @Column({ type: 'varchar' })
  country: string

  @Column({ type: 'varchar' })
  description: string

  @Column({ type: 'varchar' })
  hostId: string
}
