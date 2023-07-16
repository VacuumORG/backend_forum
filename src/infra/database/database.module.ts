import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from 'domain/repositories/UserRepository';
import { PrismaUserRepository } from './prisma/repositories/PrismaUserRepository';
import { TagRepository } from 'domain/repositories/TagRepository';
import { PrismaTagRepository } from './prisma/repositories/PrismaTagRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: TagRepository,
      useClass: PrismaTagRepository,
    },
  ],
  exports: [UserRepository, TagRepository],
})
export class DatabaseModule {}
