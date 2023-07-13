import { UploadApiOptions } from 'cloudinary';

export abstract class ServiceImageRepository {
  abstract uploadImage(
    file: Express.Multer.File,
    options?: UploadApiOptions,
  ): Promise<string>;
}
