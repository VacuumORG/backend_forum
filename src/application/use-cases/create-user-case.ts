import { Injectable } from '@nestjs/common';
import { User } from 'domain/entities/User';
import { UserRepository } from 'domain/repositories/UserRepository';

interface CreateUserRequest {
  email: string;
  name: string;
  password: string;
  avatar_url: string | undefined;
}

interface CreateUserResponse {
  user: User;
}

@Injectable()
export class CreateUserCase {
  constructor(private userRepository: UserRepository) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { email, name, password, avatar_url } = request;

    const user = new User({ email, name, password, avatar_url });

    await this.userRepository.create(user);

    return {
      user,
    };
  }
}
