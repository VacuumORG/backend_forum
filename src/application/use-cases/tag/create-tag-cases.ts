import { Injectable } from '@nestjs/common';
import { Tag } from 'domain/entities/Tags';
import { TagRepository } from 'domain/repositories/TagRepository';

interface CreateTagRequest {
  name: string;
  categoryId: string;
}

interface CreateTagResponse {
  tag: Tag;
}

@Injectable()
export class CreateTagCase {
  constructor(private tagRepository: TagRepository) {}

  async execute(request: CreateTagRequest): Promise<CreateTagResponse> {
    const { name, categoryId } = request;

    const tag = new Tag({ name, categoryId });

    await this.tagRepository.create(tag);

    return {
      tag,
    };
  }
}
