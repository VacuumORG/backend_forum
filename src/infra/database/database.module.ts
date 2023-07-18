import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from 'domain/repositories/UserRepository';
import { PrismaUserRepository } from './prisma/repositories/PrismaUserRepository';
import { TagRepository } from 'domain/repositories/TagRepository';
import { PrismaTagRepository } from './prisma/repositories/PrismaTagRepository';
import { CommentRepository } from 'domain/repositories/CommentRepository';
import { PrismaCommentRepository } from './prisma/repositories/PrismaCommentRepository';

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
    {
      provide: CommentRepository,
      useClass: PrismaCommentRepository,
    },
  ],
  exports: [UserRepository, TagRepository, CommentRepository],
})
export class DatabaseModule {}
