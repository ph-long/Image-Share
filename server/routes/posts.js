// Handles all routes dealing with making post on a blog

import express from 'express';

import {getPosts, createPost, updatePost, deletePost, likePost} from "../controllers/posts.js";

const router = express.Router();

// runs when user gos to local host 5000 /
// localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost)

export default router;