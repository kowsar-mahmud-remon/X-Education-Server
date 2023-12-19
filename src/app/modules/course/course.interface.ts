type Schedule = {
  startDate: string;
  endDate: string;
  classDays: string[];
  classTime: string;
};

export type ICourse = {
  name: string;
  description: string;
  price: number;
  duration: string;
  level: string;
  topics: string[];
  schedule: Schedule;
};
