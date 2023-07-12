import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from 'domain/repositories/UserRepository';
import { PrismaUserRepository } from './prisma/repositories/PrismaUserRepository';

@Module({
  imports: [DatabaseModule],
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class DatabaseModule {}
