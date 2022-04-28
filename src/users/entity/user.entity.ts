import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm'
import { hash } from 'bcrypt'

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid') id: string

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true
  })
  username: string

  @Column({
    type: 'varchar',
    nullable: false
  })
  password: string

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    this.password = await hash(this.password, 10)
  }
}
