import { Module } from '@nestjs/common';
import { UserController } from './UserController';
import { CloudinaryService } from 'application/services/cloudinary/cloudinary.service';
import { ServiceImageRepository } from 'domain/repositories/ServiceImageRepository';

@Module({
  controllers: [UserController],
  providers: [
    CloudinaryService,
    { provide: ServiceImageRepository, useClass: CloudinaryService },
  ],
})
export class UserModule {}
