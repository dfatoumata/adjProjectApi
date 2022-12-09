import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { PersonnelsService } from './personnels.service';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';

@Controller('personnels')
export class PersonnelsController {
  constructor(private readonly personnelsService: PersonnelsService) {}

  @Post()
  create(@Body() createPersonnelDto: CreatePersonnelDto) {
    const personnel = this.personnelsService.create(createPersonnelDto);
    return {
      statutCode: HttpStatus.OK,
      message: "Personnel creeer avec succes",
      personnel: personnel
    }
  }

  @Get()
  findAll() {
    const personnels = this.personnelsService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: "Liste des personnel recuperer avec succes",
      personnels
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const personnel = this.personnelsService.findOne(+id);
    return {
      statusode: HttpStatus.OK,
      message: "Personnel retrouver avec succes",
      personnel
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonnelDto: UpdatePersonnelDto) {
    this.personnelsService.update(+id, updatePersonnelDto);
    return {
      statusCode: HttpStatus.OK,
      message: "personnel modifier avec succes"
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.personnelsService.remove(+id);
    return {
      statusCode: HttpStatus.OK,
      message: "personnel supprimer avec succes"
    }
  }
}
