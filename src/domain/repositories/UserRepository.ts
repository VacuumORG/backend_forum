import { User } from 'domain/entities/User';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
}
