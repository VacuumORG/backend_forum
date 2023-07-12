import { Injectable } from '@nestjs/common';
import { UserRepository } from 'domain/repositories/UserRepository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  create(): void {
    throw new Error('Method not implemented.');
  }
}
