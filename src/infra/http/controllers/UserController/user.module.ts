import { Module } from '@nestjs/common';
import { UserController } from './UserController';
import { CloudinaryService } from 'application/services/cloudinary/cloudinary.service';
import { ServiceImageRepository } from 'domain/repositories/ServiceImageRepository';
import { CreateUserCase } from 'application/use-cases/create-user-case';
import { DatabaseModule } from 'infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    CloudinaryService,
    { provide: ServiceImageRepository, useClass: CloudinaryService },
    CreateUserCase,
  ],
})
export class UserModule {}
