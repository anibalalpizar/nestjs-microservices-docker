import { Module } from '@nestjs/common';
import { UserMicroserviceController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserMicroserviceController],
  providers: [UsersService],
})
export class UsersModule {}
