import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDto } from './dtos/CreatePayment.dto';

@Controller()
export class PaymentsMicroserviceController {
  // event-based approach
  @EventPattern('createPayment')
  createPayment(@Payload() data: CreatePaymentDto) {
    console.log(data);
  }
}
