import { TestBed, inject } from '@angular/core/testing';

import { ClappingServiceService } from './clapping-service.service';

describe('ClappingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClappingServiceService]
    });
  });

  it('should be created', inject([ClappingServiceService], (service: ClappingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
