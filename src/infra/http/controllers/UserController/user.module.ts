import { Module } from '@nestjs/common';
import { UserController } from './UserController';
import { CloudinaryService } from 'application/services/cloudinary/cloudinary.service';
import { ServiceImageRepository } from 'domain/repositories/ServiceImageRepository';
import { DatabaseModule } from 'infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    CloudinaryService,
    { provide: ServiceImageRepository, useClass: CloudinaryService },
  ],
})
export class UserModule {}
