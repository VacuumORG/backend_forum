import { Injectable } from '@nestjs/common';
import { UserRepository } from 'domain/repositories/UserRepository';
import { PrismaService } from '../prisma.service';
import { User } from 'domain/entities/User';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    const { id, email, name, password, avatar_url, createdAt, updatedAt } =
      user;

    await this.prisma.user.create({
      data: {
        id,
        email,
        name,
        password,
        avatar_url,
        createdAt,
        updatedAt,
      },
    });
  }
}
