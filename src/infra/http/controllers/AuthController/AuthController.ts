import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateUserDto } from 'infra/http/dtos/CreateUserDTO';
import { diskStorage } from 'multer';
import * as bcrypt from 'bcrypt';
import { ServiceImageRepository } from 'domain/repositories/ServiceImageRepository';
import { CreateUserCase } from 'application/use-cases/auth/create-user-case';

@Controller('auth')
export class AuthController {
  constructor(
    private serviceImageRepository: ServiceImageRepository,
    private createUserCase: CreateUserCase,
  ) {}

  @Post('/register')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({}),
    }),
  )
  async register(
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
