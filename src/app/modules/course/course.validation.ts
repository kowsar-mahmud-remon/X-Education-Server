import { z } from 'zod';

const createScheduleZodSchema = z.object({
  body: z.object({
    startDate: z.string({
      required_error: 'startDate is required',
    }),
    endDate: z.string({
      required_error: 'endDate is required',
    }),
    classDays: z.string({
      required_error: 'classDays is required',
    }),
    classTime: z.string({
      required_error: 'classTime is required',
    }),
  }),
});

const createCourseZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    description: z.string({
      required_error: 'description is required',
    }),
    price: z.number({
      required_error: 'price is required',
    }),
    duration: z.string({
      required_error: 'duration is required',
    }),
    level: z.string({
      required_error: 'level is required',
    }),
    topics: z.string({
      required_error: 'topics is required',
    }),
    schedule: createScheduleZodSchema,
  }),
});

export const CourseValidation = {
  createCourseZodSchema,
};
