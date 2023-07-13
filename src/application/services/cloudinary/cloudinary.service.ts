import { Injectable } from '@nestjs/common';
import { ServiceImageRepository } from 'domain/repositories/ServiceImageRepository';
import { UploadApiOptions, v2 as cloudinary } from 'cloudinary';

@Injectable()
export class CloudinaryService implements ServiceImageRepository {
  async uploadImage(
    file: Express.Multer.File,
    options?: UploadApiOptions,
  ): Promise<string> {
    const uploader = await cloudinary.uploader.upload(file.path, options);
    return uploader.url;
  }
}
