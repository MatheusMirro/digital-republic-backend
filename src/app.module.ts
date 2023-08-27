import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaintController } from './paint/controllers/paint.controller';
import { PaintService } from './paint/services/paint.service';

@Module({
  controllers: [AppController, PaintController],
  providers: [AppService, PaintService],
})
export class AppModule {}
