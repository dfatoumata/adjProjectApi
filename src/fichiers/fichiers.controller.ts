import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { FichiersService } from './fichiers.service';
import { CreateFichierDto } from './dto/create-fichier.dto';
import { UpdateFichierDto } from './dto/update-fichier.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('fichiers')
export class FichiersController {
  constructor(private readonly fichiersService: FichiersService) {}

  @Post()
  @UseInterceptors(FileInterceptor('fichier', {
    storage: diskStorage({
      destination: './fichiers',
    })
  } ))
  create(@Body() createFichierDto: CreateFichierDto) {
    return this.fichiersService.create(createFichierDto);
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
