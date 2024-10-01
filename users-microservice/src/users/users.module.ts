import { Module } from '@nestjs/common';
import { UserMicroserviceController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { UsersService } from './users.service';
import { Payment } from 'src/typeorm/entities/Payment';

@Module({
  imports: [TypeOrmModule.forFeature([User, Payment])],
  controllers: [UserMicroserviceController],
  providers: [UsersService],
})
export class UsersModule {}
