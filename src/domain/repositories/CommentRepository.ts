import { Comment } from 'domain/entities/Comment';

export abstract class CommentRepository {
  abstract create(comment: Comment): Promise<void>;
}
