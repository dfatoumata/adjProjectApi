import { PersonnelsService } from './personnels.service';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
export declare class PersonnelsController {
    private readonly personnelsService;
    constructor(personnelsService: PersonnelsService);
    create(createPersonnelDto: CreatePersonnelDto): Promise<CreatePersonnelDto & import("./entities/personnel.entity").Personnel>;
    findAll(): Promise<import("./entities/personnel.entity").Personnel[]>;
    findOne(id: string): Promise<import("./entities/personnel.entity").Personnel>;
    update(id: string, updatePersonnelDto: UpdatePersonnelDto): Promise<import("./entities/personnel.entity").Personnel>;
    remove(id: string): {
        deleted: boolean;
    };
}
