import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { FichiersService } from './fichiers.service';
import { FichiersController } from './fichiers.controller';
import { Fichier } from './entities/fichier.entity';

@Module({
  imports:  [TypeOrmModule.forFeature([Fichier])],
  controllers: [FichiersController],
  providers: [FichiersService]
})
export class FichiersModule {}
