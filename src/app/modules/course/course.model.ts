import { Model, Schema, model } from 'mongoose';
import { ICourse } from './course.interface';

type CourseModel = Model<ICourse, Record<string, unknown>>;

const ScheduleSchema = new Schema({
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  classDays: {
    type: [String],
    required: true,
  },
  classTime: {
    type: String,
    required: true,
  },
});

const CourseSchema = new Schema<ICourse>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    topics: {
      type: [String],
      required: true,
    },
    schedule: {
      type: ScheduleSchema,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Course = model<ICourse, CourseModel>('Course', CourseSchema);
