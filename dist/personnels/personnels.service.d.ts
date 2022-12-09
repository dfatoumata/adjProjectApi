import { Repository } from 'typeorm';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
import { Personnel } from './entities/personnel.entity';
export declare class PersonnelsService {
    private personnelRepository;
    constructor(personnelRepository: Repository<Personnel>);
    create(createPersonnelDto: CreatePersonnelDto): Promise<CreatePersonnelDto & Personnel>;
    findAll(): Promise<Personnel[]>;
    findOne(id: number): Promise<Personnel>;
    update(id: number, updatePersonnelDto: UpdatePersonnelDto): Promise<Personnel>;
    remove(id: number): {
        deleted: boolean;
    };
}
