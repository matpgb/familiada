import { TestBed, inject } from '@angular/core/testing';

import { PointsCounterService } from './points-counter.service';

describe('PointsCounterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PointsCounterService]
    });
  });

  it('should be created', inject([PointsCounterService], (service: PointsCounterService) => {
    expect(service).toBeTruthy();
  }));
});
