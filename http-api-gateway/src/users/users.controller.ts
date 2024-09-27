import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('users')
// no comunicate with a database, communicate with a nats server
// request body is a json object (username, email, etc)
// send a message to the nats server
// nats server will send a message to the users-microservice
// extra: the users-microservice have to be subscribed to the nats server
export class UsersController {
  constructor(
    @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
  ) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log('createUserDto', createUserDto);
  }
}
