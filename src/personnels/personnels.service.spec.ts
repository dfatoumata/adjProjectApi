import { Test, TestingModule } from '@nestjs/testing';
import { PersonnelsController } from './personnels.controller';
import { PersonnelsService } from './personnels.service';

describe('PersonnelsService', () => {
  let personnelControllers: PersonnelsController;
  let personnelService: PersonnelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonnelsService],
    }).compile();

    personnelService = module.get<PersonnelsService>(PersonnelsService);
  });

  it('should be defined', () => {
    expect(personnelService).toBeDefined();
  });
});
