import { Request, Response } from 'express';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ICourse } from './course.interface';
import { CourseService } from './user.service';

const createCourse = catchAsync(async (req: Request, res: Response) => {
  const course = req.body;
  const result = await CourseService.createCourse(course);

  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: 'The course has been added successfully',
    data: result,
  });
});

const getAllCourses = catchAsync(async (req: Request, res: Response) => {
  const allCourses = await CourseService.getAllCourses();

  if (!allCourses) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to get Courses');
  }

  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses fetched successfully !',
    data: allCourses,
  });
});

const getSingleCourse = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const singleCourse = await CourseService.getSingleCourse(id);

  if (!singleCourse) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to get Course');
  }

  sendResponse<ICourse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course fetched successfully !',
    data: singleCourse,
  });
});

const updateCourse = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const updatedCourse = await CourseService.updateCourse(id, updatedData);

  if (!updatedCourse) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to Update Course');
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course updated successfully !',
    data: updatedCourse,
  });
});

const deleteCourse = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const deletedCourse = await CourseService.deleteCourse(id);

  if (!deletedCourse) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to delete Course');
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course deleted successfully !',
    data: deletedCourse,
  });
});

export const CourseController = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};
