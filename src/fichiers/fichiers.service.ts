import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFichierDto } from './dto/create-fichier.dto';
import { UpdateFichierDto } from './dto/update-fichier.dto';
import { Fichier } from './entities/fichier.entity';

@Injectable()
export class FichiersService {

  constructor(@InjectRepository(Fichier) private fichierRepositoy: Repository<Fichier>){}
  create(createFichierDto: CreateFichierDto) {
    return this.fichierRepositoy.save(createFichierDto);
  }

  findAll() {
    return this.fichierRepositoy.find();
  }

  findOne(id: number) {
    return this.fichierRepositoy.findOne({where: {id: id}});
  }

  update(id: number, updateFichierDto: UpdateFichierDto) {
    return `This action updates a #${id} fichier`;
  }

  remove(id: number) {
    return this.fichierRepositoy.delete({id});
  }
}
