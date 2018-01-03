import { TestBed, inject } from '@angular/core/testing';

import { QaFormServiceService } from './qa-form-service.service';

describe('QaFormServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QaFormServiceService]
    });
  });

  it('should be created', inject([QaFormServiceService], (service: QaFormServiceService) => {
    expect(service).toBeTruthy();
  }));
});
