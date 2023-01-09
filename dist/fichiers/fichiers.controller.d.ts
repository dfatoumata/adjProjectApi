/// <reference types="multer" />
import { FichiersService } from './fichiers.service';
import { UpdateFichierDto } from './dto/update-fichier.dto';
export declare class FichiersController {
    private readonly fichiersService;
    constructor(fichiersService: FichiersService);
    create(file: Express.Multer.File): void;
    findAll(): Promise<import("./entities/fichier.entity").Fichier[]>;
    findOne(id: string): Promise<import("./entities/fichier.entity").Fichier>;
    update(id: string, updateFichierDto: UpdateFichierDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
