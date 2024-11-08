import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DialogsService } from './dialogs/dialogs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/'), UsersModule],
  controllers: [AppController],
  providers: [AppService, DialogsService],
})
export class AppModule {}
