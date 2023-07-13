import { Controller } from '@nestjs/common';
import { ServiceImageRepository } from 'domain/repositories/ServiceImageRepository';

@Controller('users')
export class UserController {
  constructor(
    private readonly serviceImageRepository: ServiceImageRepository,
  ) {}
}
