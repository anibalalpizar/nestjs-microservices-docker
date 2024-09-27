import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersModule } from './users/users.modules';

@Module({
  imports: [
    
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}