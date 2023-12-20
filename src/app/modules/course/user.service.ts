import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ICourse } from './course.interface';
import { Course } from './course.model';

const createCourse = async (courseData: ICourse) => {
  const createCourse = await Course.create(courseData);

  if (!createCourse) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create Course');
  }

  return createCourse;
};

const getAllCourses = async () => {
  const allCourses = await Course.find({});
  return allCourses;
};

const getSingleCourse = async (id: string) => {
  const result = await Course.findOne({ _id: id });
  return result;
};

const updateCourse = async (id: string, payload: Partial<ICourse>) => {
  const isExist = await Course.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found !');
  }

  const result = await Course.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteCourse = async (id: string) => {
  const isExist = await Course.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found !');
  }

  const deletedCourse = await Course.findOneAndDelete(
    { _id: id },
    {
      new: true,
    }
  );

  return deletedCourse;
};

export const CourseService = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};
