import { DvlaInfo } from "./dvla-info.model";

export interface DvlaVehicle {
  id: number;
  registration: string;
  make: string;
  color: string;
  fuelType: string;
  engineCapacity: number;
  monthRegistration: string;
  motStatus: string;
  motExpiryDate: Date;
  
  dvlaInfo: DvlaInfo;

  automatedVehicle: boolean;
  revenueWeight: number;
  realDrivingEmissions: string;
  euroStatus: string;
}