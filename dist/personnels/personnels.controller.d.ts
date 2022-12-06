import { PersonnelsService } from './personnels.service';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
export declare class PersonnelsController {
    private readonly personnelsService;
    constructor(personnelsService: PersonnelsService);
    create(createPersonnelDto: CreatePersonnelDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePersonnelDto: UpdatePersonnelDto): string;
    remove(id: string): string;
}
