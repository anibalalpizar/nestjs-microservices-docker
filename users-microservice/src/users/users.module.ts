import { Module } from '@nestjs/common';
import { UserMicroserviceController } from './users.controller';

@Module({
  imports: [],
  controllers: [UserMicroserviceController],
  providers: [],
})
export class UsersModule {}
