import React from "react";
import Post from './Post/Post';
import useStyles from './styles'
import {useSelector} from 'react-redux';
import {Grid, CircularProgress} from '@material-ui/core';
    
const Posts = ({setCurrentId}) => {
    // Allows this component access to the posts state from redux
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    // console.log(posts);
    return (
        // posts is an array of post
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignitem="streatch" spacing={3}>
                {posts.map((post) => (
                    <Grid key = {post._id} item cs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts;