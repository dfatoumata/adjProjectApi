import { HttpStatus } from '@nestjs/common';
import { PersonnelsService } from './personnels.service';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
export declare class PersonnelsController {
    private readonly personnelsService;
    constructor(personnelsService: PersonnelsService);
    create(createPersonnelDto: CreatePersonnelDto): {
        statutCode: HttpStatus;
        message: string;
        personnel: Promise<CreatePersonnelDto & import("./entities/personnel.entity").Personnel>;
    };
    findAll(): {
        statusCode: HttpStatus;
        message: string;
        personnels: Promise<import("./entities/personnel.entity").Personnel[]>;
    };
    findOne(id: string): {
        statusode: HttpStatus;
        message: string;
        personnel: Promise<import("./entities/personnel.entity").Personnel>;
    };
    update(id: string, updatePersonnelDto: UpdatePersonnelDto): {
        statusCode: HttpStatus;
        message: string;
    };
    remove(id: string): {
        statusCode: HttpStatus;
        message: string;
    };
}
