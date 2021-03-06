import { TestComment } from "./test-comment.model";

export interface MotTest {
  id: number;
  completedDate: Date;
  result: string;
  expiryDate: Date;
  mileage: number;
  motTestNumber: number;
  odometerResultType: string;
  odometerUnit: string;
  comments: TestComment[];
}