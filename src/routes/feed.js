import express from 'express';
import {
    getPosts,
    createPost,
} from '../controllers/feed';

const router = express.Router();

router.get('/posts', getPosts);
router.post('/post', createPost);

export default router;
