import express from 'express';
import { validatePost } from '../middlewares/validators';
import {
    getPosts,
    createPost,
} from '../controllers/feed';

const router = express.Router();

router.get('/posts', getPosts);
router.post('/post', validatePost, createPost);

export default router;
