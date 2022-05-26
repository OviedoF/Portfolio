import { TestBed } from '@angular/core/testing';

import { MainPositionService } from './main-position.service';

describe('MainPositionService', () => {
  let service: MainPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
