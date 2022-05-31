import { TestBed } from '@angular/core/testing';

import { NumberpositionserviceService } from './numberpositionservice.service';

describe('NumberpositionserviceService', () => {
  let service: NumberpositionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberpositionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
