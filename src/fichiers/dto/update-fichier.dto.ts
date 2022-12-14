import { PartialType } from '@nestjs/mapped-types';
import { CreateFichierDto } from './create-fichier.dto';

export class UpdateFichierDto extends PartialType(CreateFichierDto) {}
