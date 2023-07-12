import { Injectable } from '@nestjs/common';
import { ServiceImageRepository } from 'domain/repositories/ServiceImageRepository';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class CloudinaryService implements ServiceImageRepository {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_API_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadImage(): Promise<string> {
    return 'Hello World';
  }
}
