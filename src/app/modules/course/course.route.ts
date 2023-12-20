import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseController } from './course.controller';
import { CourseValidation } from './course.validation';
const router = express.Router();

router.get('/:id', CourseController.getSingleCourse);

router.get('/', CourseController.getAllCourses);

router.post(
  '/',
  validateRequest(CourseValidation.createCourseZodSchema),
  CourseController.createCourse
);

router.delete('/:id', CourseController.deleteCourse);

router.patch('/:id', CourseController.updateCourse);

export const CourseRoutes = router;
