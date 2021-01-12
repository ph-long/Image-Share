// Functions for route/posts.js to remove clutter
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

/* https status codes:
    https://www.restapitutorial.com/httpstatuscodes.html */
export const getPosts = async (req, res) => {
    try{
        const postMessage = await PostMessage.find()
        // status 200 = everything is okay returns the json
        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    // post request has a .body
    const post = req.body;
    const newPost = new PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async (req, res) => {
    // posts/123 = 123 is params
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    //Checks if id is in mongo
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async(req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await PostMessage.findByIdAndRemove(id);
    res.json({message: "Post deleted successfully"});
}

export const likePost = async(req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true});
    res.json(updatedPost);
}
