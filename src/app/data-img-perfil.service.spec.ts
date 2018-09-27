import { TestBed, inject } from '@angular/core/testing';

import { DataImgPerfilService } from './data-img-perfil.service';

describe('DataImgPerfilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataImgPerfilService]
    });
  });

  it('should be created', inject([DataImgPerfilService], (service: DataImgPerfilService) => {
    expect(service).toBeTruthy();
  }));
});
