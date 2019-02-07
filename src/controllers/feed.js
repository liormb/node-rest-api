import { validationResult } from 'express-validator/check';

export function getPosts(req, res, next) {
    res.status(200).json({
        posts: [
            {
                _id: Date.now(),
                title: 'First Post',
                content: 'This is the first post',
                imageUrl: 'data/images/duck.jpg',
                creator: {
                    name: 'Lior Elrom',
                },
                createdAt: new Date(),
            },
        ],
    });
}

export function createPost(req, res, next) {
    const { title, content } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            message: 'Validation failed, post data is not valid.',
            errors: errors.array(),
        });
    }
    res.status(201).json({
        message: 'Post created successfully',
        post: {
            _id: Date.now(),
            title,
            content,
            creator: {
                name: 'Lior Elrom',
            },
            createdAt: new Date(),
        },
    });
}
