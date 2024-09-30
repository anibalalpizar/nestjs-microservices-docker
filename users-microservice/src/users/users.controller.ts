import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UsersService } from './users.service';

@Controller()
export class UserMicroserviceController {
  constructor(private userService: UsersService) {}

  // request-response approach
  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: CreateUserDto) {
    return this.userService.createUser(data);
  }

  // event-based approach
  @EventPattern('paymentCreated')
  paymentCreated(@Payload() data: any) {
    console.log(data);
  }
}
