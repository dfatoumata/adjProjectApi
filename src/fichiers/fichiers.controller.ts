import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FichiersService } from './fichiers.service';
// import { CreateFichierDto } from './dto/create-fichier.dto';
import { UpdateFichierDto } from './dto/update-fichier.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { readFileSync } from 'fs';

@Controller('fichiers')
export class FichiersController {
  constructor(private readonly fichiersService: FichiersService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@UploadedFile() file: Express.Multer.File ) {
    console.log(file)
  }

  @Get()
  findAll() {
    return this.fichiersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fichiersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFichierDto: UpdateFichierDto) {
    return this.fichiersService.update(+id, updateFichierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fichiersService.remove(+id);
  }
}
