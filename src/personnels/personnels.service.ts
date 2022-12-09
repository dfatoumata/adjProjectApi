import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
import { Personnel } from './entities/personnel.entity';

@Injectable()
export class PersonnelsService {
  
  constructor(@InjectRepository(Personnel)
    private personnelRepository: Repository<Personnel>){}

  create(createPersonnelDto: CreatePersonnelDto) {
     const personnel =this.personnelRepository.save(createPersonnelDto);
     return personnel;
  }

  findAll() {
    return this.personnelRepository.find();
  }

  findOne(id: number) {
    return this.personnelRepository.findOne({
      where: { id: id}
    });
  }

  update(id: number, updatePersonnelDto: UpdatePersonnelDto) {
    this.personnelRepository.update({id}, updatePersonnelDto);
    return this.personnelRepository.findOne({where: {id:id }});
  }

  remove(id: number) {
    this.personnelRepository.delete({id});
    return { deleted: true };
  }
}
