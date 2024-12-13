import { TestBed } from '@angular/core/testing';

import { AllcarsService } from './allcars.service';

describe('AllcarsService', () => {
  let service: AllcarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllcarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
