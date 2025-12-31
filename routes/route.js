
const express = require('express');
const {
  users_controller,
  subscriptions_controller,
  reviews_controller,
  quizzes_controller,
  QuizQuestions_controller,
  QuizAtempts_controller,
  payments_controller,
  notifications_controller,
  lessons_controller,
  LessonProgress_Controller,
  institute_controller,
  enrollments_controller,
  CourseSection_controller,
  courses_controller,
  certificates_controller
} = require('../controller/index');

const router = express.Router();

// 1. User Routes
router.post('/user/create', users_controller.CreatUser);
router.get('/user/fetch/:id', users_controller.FetchUser);
router.put('/user/update/:id', users_controller.UpdateUser);
router.delete('/user/delete/:id', users_controller.DeleteUser);

// 2. Subscription Routes
router.post('/sub/create', subscriptions_controller.CreateSubscription);
router.get('/sub/fetch/:id', subscriptions_controller.FetchSubscription);
router.put('/sub/update/:id', subscriptions_controller.UpdateSubscription);
router.delete('/sub/delete/:id', subscriptions_controller.DeleteSubscription);

// 3. Reviews Routes
router.post('/review/create', reviews_controller.CreatReview);
router.get('/review/fetch/:id', reviews_controller.FetchReview);
router.put('/review/update/:id', reviews_controller.UpdateReview);
router.delete('/review/delete/:id', reviews_controller.DeleteReview);

// 4. Quizzes Routes
router.post('/quizzes/create', quizzes_controller.CreateData);
router.get('/quizzes/fetch/:id', quizzes_controller.FetchData);
router.put('/quizzes/update/:id', quizzes_controller.UpdateData);
router.delete('/quizzes/delete/:id', quizzes_controller.DeleteData);

// 5. Quiz Questions Routes
router.post('/quizQuestion/create', QuizQuestions_controller.CreateData);
router.get('/quizQuestion/fetch/:id', QuizQuestions_controller.FetchData);
router.put('/quizQuestion/update/:id', QuizQuestions_controller.UpdateData);
router.delete('/quizQuestion/delete/:id', QuizQuestions_controller.DeleteData);

// 6. Quiz Attempts Routes
router.post('/quizAttempts/create', QuizAtempts_controller.CreateData);
router.get('/quizAttempts/fetch/:id', QuizAtempts_controller.FetchData);
router.put('/quizAttempts/update/:id', QuizAtempts_controller.UpdateData);
router.delete('/quizAttempts/delete/:id', QuizAtempts_controller.DeleteData);

// 7. Payments Routes
router.post('/payments/create', payments_controller.CreateData);
router.get('/payments/fetch/:id', payments_controller.FetchData);
router.put('/payments/update/:id', payments_controller.UpdateData);
router.delete('/payments/delete/:id', payments_controller.DeleteData);

// 8. Notifications Routes
router.post('/notification/create', notifications_controller.CreateData);
router.get('/notification/fetch/:id', notifications_controller.FetchData);
router.put('/notification/update/:id', notifications_controller.UpdateData);
router.delete('/notification/delete/:id', notifications_controller.DeleteData);

// 9. Lessons Routes
router.post('/lessons/create', lessons_controller.CreateData);
router.get('/lessons/fetch/:id', lessons_controller.FetchData);
router.put('/lessons/update/:id', lessons_controller.UpdateData);
router.delete('/lessons/delete/:id', lessons_controller.DeleteData);

// 10. Lesson Progress Routes
router.post('/lessonProgress/create', LessonProgress_Controller.CreateData);
router.get('/lessonProgress/fetch/:id', LessonProgress_Controller.FetchData);
router.put('/lessonProgress/update/:id', LessonProgress_Controller.UpdateData);
router.delete('/lessonProgress/delete/:id', LessonProgress_Controller.DeleteData);

// 11. Institute Routes
router.post('/institute/create', institute_controller.CreateData);
router.get('/institute/fetch/:id', institute_controller.FetchData);
router.put('/institute/update/:id', institute_controller.UpdateData);
router.delete('/institute/delete/:id', institute_controller.DeleteData);

// 12. Enrollments Routes
router.post('/enrollments/create', enrollments_controller.CreateData);
router.get('/enrollments/fetch/:id', enrollments_controller.FetchData);
router.put('/enrollments/update/:id', enrollments_controller.UpdateData);
router.delete('/enrollments/delete/:id', enrollments_controller.DeleteData);

// 13. Course Section Routes
router.post('/courseSection/create', CourseSection_controller.CreateData);
router.get('/courseSection/fetch/:id', CourseSection_controller.FetchData);
router.put('/courseSection/update/:id', CourseSection_controller.UpdateData);
router.delete('/courseSection/delete/:id', CourseSection_controller.DeleteData);

// 14. Courses Routes
router.post('/courses/create', courses_controller.CreateData);
router.get('/courses/fetch/:id', courses_controller.FetchData);
router.put('/courses/update/:id', courses_controller.UpdateData);
router.delete('/courses/delete/:id', courses_controller.DeleteData);

// 15. Certificates Routes
router.post('/certificates/create', certificates_controller.CreateData);
router.get('/certificates/fetch/:id', certificates_controller.FetchData);
router.put('/certificates/update/:id', certificates_controller.UpdateData);
router.delete('/certificates/delete/:id', certificates_controller.DeleteData);

module.exports = router;
