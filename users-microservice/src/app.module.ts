import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3307,
      database: 'nest_microservices',
      entities: [User],
      synchronize: true,
      username: 'testuser',
      password: 'testuser123',
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
