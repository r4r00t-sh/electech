import openingsData from "../../data/careers-openings.json";

export type CareerOpening = {
  title: string;
  department?: string;
};

export const careerOpenings = openingsData as CareerOpening[];

export function getCareerOpenings() {
  return careerOpenings;
}
