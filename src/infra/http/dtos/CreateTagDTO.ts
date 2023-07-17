import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateTagDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsUUID()
  categoryId: string;
}
