import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonnelsModule } from './personnels/personnels.module';

@Module({
  imports: [PersonnelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
