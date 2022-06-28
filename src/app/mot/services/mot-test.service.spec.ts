import { assertPlatform } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Vehicle } from '../models/vehicle.model';

import { MotTestService } from './mot-test.service';

describe('MotTestService', () => {
  let service: MotTestService;
  let vehicle: Vehicle;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotTestService);

    vehicle = {
      id: 1,
        make: 'Volvo',
        model: 'v60',
        motTestDueDate: new Date(1,1,1,0,0,0),
        registration: 'FR44YTR',
        registrationDate: new Date(2014,3,3),
        primaryColor: 'red',
        engineSize: '2000',
        manufactureDate: new Date(2013,5,5),
        mileageStatistics: [],
        motTests: [],
        uniqueVehicleId: 'kl9987hj',
        fuelType: 'Petrol',
        firstUsedDate: new Date(2013,6,5)
    }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('mot tests are zero return false', () => {
     let hasTests = service.hasTests(vehicle);
     expect(hasTests).toBeFalsy();
  });

  it('mot tests are not zero return true', () => {
    vehicle.motTests = [
      {
        id: 1,
        result: 'PASSED',
        expiryDate: new Date(2023,4,5),
        completedDate: new Date(2022,3,5),
        motTestNumber: 876543,
        odometerResultType: 'test',
        odometerUnit: 'mi',
        mileage: 65000,
        comments: []        
      }
    ];
    let hasTests = service.hasTests(vehicle);
    expect(hasTests).toBeTruthy();
 });
});
