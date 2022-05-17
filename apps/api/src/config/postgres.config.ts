import { Injectable } from '@nestjs/common'
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'

@Injectable()
export default class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5432,
      password: process.env.POSTGRES_PASSWORD,
      username: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DB,
      synchronize: false,
      logging: true,
      entities: ['dist/**/*.entity.js'],
      migrations: ['dist/migration/**/*.js'],
      subscribers: ['dist/subscriber/**/*.js'],
      cli: {
        entitiesDir: 'src',
        migrationsDir: 'src/migration',
        subscribersDir: 'src/subscriber'
      }
    }
  }
}
