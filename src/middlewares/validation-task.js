const { check } = require('express-validator');
const { catchErrors } = require('./validation-catching-errors');

const validateTitle = [
  check('title')
    .trim()
    .notEmpty()
    .withMessage('Title must not be empty')
    .isLength({ min: 2, max: 100 })
    .withMessage('Title muse be between 2 and 100 chars')
    .matches(/^[A-Za-z0-9\s]+$/)
    .withMessage('Title must contain only letters, numbers and spaces'),
  catchErrors,
];

const validateCheckbox = [
  check('statusCheckbox')
    .notEmpty()
    .withMessage('The checkbox is empty for some reason')
    .isBoolean()
    .withMessage('The checkbox is not bollean some reason'),
  catchErrors,
];

module.exports = {
  validateTitle,
  validateCheckbox,
};
