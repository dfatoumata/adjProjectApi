import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PersonnelsService } from './personnels.service';
import { PersonnelsController } from './personnels.controller';
import { Personnel } from './entities/personnel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Personnel])],
  controllers: [PersonnelsController],
  providers: [PersonnelsService]
})
export class PersonnelsModule {}
