import { Tag } from 'domain/entities/Tags';

export abstract class TagRepository {
  abstract create(tag: Tag): Promise<void>;
}
