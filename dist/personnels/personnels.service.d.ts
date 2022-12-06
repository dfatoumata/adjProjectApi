import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
export declare class PersonnelsService {
    create(createPersonnelDto: CreatePersonnelDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePersonnelDto: UpdatePersonnelDto): string;
    remove(id: number): string;
}
