import express from 'express';
import Restaurant from '../models/Restaurant.js';

const router = express.Router();

// Saving the post
router.post('/post/save', async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(200).json({ success: 'Post saved successfully' });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Get all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Get a specific post
router.get('/post/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Update a post
router.put('/post/:id', async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ success: 'Post updated successfully' });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Delete a post
router.delete('/post/:id', async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndRemove(req.params.id);
    res.status(200).json({ success: 'Post deleted successfully', deletedPost });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

export default router;
