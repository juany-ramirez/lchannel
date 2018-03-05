import { TestBed, inject } from '@angular/core/testing';

import { ConfigServicService } from './config-servic.service';

describe('ConfigServicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigServicService]
    });
  });

  it('should be created', inject([ConfigServicService], (service: ConfigServicService) => {
    expect(service).toBeTruthy();
  }));
});
