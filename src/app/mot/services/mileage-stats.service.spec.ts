import { TestBed } from '@angular/core/testing';

import { MileageStatsService } from './mileage-stats.service';

describe('MileageStatsService', () => {
  let service: MileageStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MileageStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
