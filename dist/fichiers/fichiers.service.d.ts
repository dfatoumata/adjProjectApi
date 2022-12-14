import { Repository } from 'typeorm';
import { CreateFichierDto } from './dto/create-fichier.dto';
import { UpdateFichierDto } from './dto/update-fichier.dto';
import { Fichier } from './entities/fichier.entity';
export declare class FichiersService {
    private fichierRepositoy;
    constructor(fichierRepositoy: Repository<Fichier>);
    create(createFichierDto: CreateFichierDto): Promise<CreateFichierDto & Fichier>;
    findAll(): Promise<Fichier[]>;
    findOne(id: number): Promise<Fichier>;
    update(id: number, updateFichierDto: UpdateFichierDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
