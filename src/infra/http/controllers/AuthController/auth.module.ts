import { Module } from '@nestjs/common';
import { AuthController } from './AuthController';
import { CreateUserCase } from 'application/use-cases/auth/create-user-case';
import { DatabaseModule } from 'infra/database/database.module';
import { CloudinaryService } from 'application/services/cloudinary/cloudinary.service';
import { ServiceImageRepository } from 'domain/repositories/ServiceImageRepository';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [
    CloudinaryService,
    { provide: ServiceImageRepository, useClass: CloudinaryService },
    CreateUserCase,
  ],
})
export class AuthModule {}
