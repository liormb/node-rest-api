import { body } from 'express-validator/check';

export const validatePost = [
    body('title')
        .trim()
        .isLength({ min: 5 }),
    body('content')
        .trim()
        .isLength({ min: 5 }),
];
