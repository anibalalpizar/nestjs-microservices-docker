import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDto } from './dtos/CreatePayment.dto';
import { PaymentsService } from './payments.service';

@Controller()
export class PaymentsMicroserviceController {
  constructor(
    @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
    private paymentsService: PaymentsService,
  ) {}
  // event-based approach
  @EventPattern('createPayment')
  async createPayment(@Payload() data: CreatePaymentDto) {
    console.log(data);
    const newPayment = await this.paymentsService.createPayment(data);
    if (newPayment) this.natsClient.emit('paymentCreated', newPayment);
  }
}
