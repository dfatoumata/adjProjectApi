import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonnelsModule } from './personnels/personnels.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personnel } from './personnels/entities/personnel.entity';
import { FichiersModule } from './fichiers/fichiers.module';
import { Fichier } from './fichiers/entities/fichier.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'nesttest',
      entities: [Personnel, Fichier],
      synchronize: true,
    }), PersonnelsModule, FichiersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
