import { Module } from '@nestjs/common';
import { UserController } from './controllers/UserController';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export class HttpModule {}
