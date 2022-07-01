import { StatsForm } from "../enums/stats-form.enum";

export interface MileageStatistics {
  startYear: number;
  endYear: number;
  mileage: number;
  form: StatsForm;
}