import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateUserCase } from 'application/use-cases/create-user-case';
import { ServiceImageRepository } from 'domain/repositories/ServiceImageRepository';
import { CreateUserDto } from 'infra/http/dtos/CreateUserDTO';
import { diskStorage } from 'multer';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserCase: CreateUserCase,
    private readonly serviceImageRepository: ServiceImageRepository,
  ) {}

  @Post('/')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({}),
    }),
  )
  async upload(
    @Body() body: CreateUserDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const { email, name, password } = body;

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    let profile_url: string | null;

    if (file) {
      profile_url = await this.serviceImageRepository.uploadImage(file, {
        folder: `users`,
        use_filename: true,
        unique_filename: true,
        filename_override: 'profile',
      });
    }

    const { user } = await this.createUserCase.execute({
      email,
      name,
      password: passwordHash,
      avatar_url: profile_url,
    });
  }
}
