import { Test, TestingModule } from '@nestjs/testing';
import { FichiersController } from './fichiers.controller';
import { FichiersService } from './fichiers.service';

describe('FichiersController', () => {
  let controller: FichiersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FichiersController],
      providers: [FichiersService],
    }).compile();

    controller = module.get<FichiersController>(FichiersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
