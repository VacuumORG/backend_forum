import { Module } from '@nestjs/common';
import { UserModule } from './controllers/UserController/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class HttpModule {}
