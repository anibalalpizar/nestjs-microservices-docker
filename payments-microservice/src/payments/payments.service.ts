import { Injectable } from '@nestjs/common';
import { Payment } from 'src/typeorm/entities/Payment';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dtos/CreatePayment.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment) private paymentsRepository: Repository<Payment>,
  ) {}

  createPayment(createPaymentDto: CreatePaymentDto) {
    const newPayment = this.paymentsRepository.create(createPaymentDto);
    return this.paymentsRepository.save(newPayment);
  }
}
