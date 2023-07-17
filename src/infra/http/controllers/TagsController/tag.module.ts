import { Module } from '@nestjs/common';
import { TagController } from './TagController';
import { CreateTagCase } from 'application/use-cases/tag/create-tag-cases';
import { DatabaseModule } from 'infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TagController],
  providers: [CreateTagCase],
})
export class TagModule {}
