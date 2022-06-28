import { DvlaVehicle } from "./dvla-vehicle.model";

export interface DvlaResponse {
  status: string;
  data: DvlaVehicle;
}
