import { MileageStatistics } from "./mileage-statistics.model";
import { MotTest } from "./mot-test.model";

export interface Vehicle {
  id: number;
  registration: string;
  make: string;
  model: string;
  primaryColor: string;
  fuelType: string;
  firstUsedDate: Date;
  motTestDueDate: Date;
  manufactureDate: Date;
  registrationDate: Date;
  engineSize: string;
  uniqueVehicleId: string;

  motTests: MotTest[];
  mileageStatistics: MileageStatistics[]; 
}