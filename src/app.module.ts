import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaintController } from './paint/controllers/paint.controller';
import { PaintService } from './paint/services/paint.service';

@Module({
  controllers: [AppController, PaintController],
  providers: [AppService, PaintService],
  imports: [
    BullModule.forRoot({
      redis: {
        host: process.env.BULL_HOST,
        port: Number(process.env.BULL_PORT),
      },
    }),
  ],
})
export class AppModule {}
