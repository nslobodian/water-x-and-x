import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm'
import bcrypt from 'bcrypt'

@Entity('user')
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
    this.password = await bcrypt.hash(this.password, 10)
  }
}