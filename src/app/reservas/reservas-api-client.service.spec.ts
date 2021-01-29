import { TestBed, inject } from '@angular/core/testing';

import { ReservasApiClientService } from './reservas-api-client.service';

describe('ReservasApiClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservasApiClientService]
    });
  });

  it('should be created', inject([ReservasApiClientService], (service: ReservasApiClientService) => {
    expect(service).toBeTruthy();
  }));
});
