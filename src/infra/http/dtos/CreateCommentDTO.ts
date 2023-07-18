import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateCommentDTO {
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsUUID()
  topicId: string;
}
