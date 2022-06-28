import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class MotTestService {

  constructor() { }

  hasTests = (vehicle: Vehicle): boolean => {
    return (vehicle && vehicle.motTests && vehicle.motTests.length > 0) ? true : false;
  }  
}
