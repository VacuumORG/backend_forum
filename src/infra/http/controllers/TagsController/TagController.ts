import { Body, Controller, Post } from '@nestjs/common';
import { CreateTagCase } from 'application/use-cases/tag/create-tag-cases';
import { CreateTagDto } from 'infra/http/dtos/CreateTagDTO';

@Controller('tags')
export class TagController {
  constructor(private createTagCase: CreateTagCase) {}

  @Post('/')
  async create(@Body() body: CreateTagDto) {
    const { name, categoryId } = body;

    await this.createTagCase.execute({
      name,
      categoryId,
    });
  }
}
