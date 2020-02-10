import React from 'react';
import s from './MyPosts.module.css';
import avatar1 from './Post/avatar1.jpg'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            <div>My posts</div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Add post</button>
            <button>Remove</button>
            <div>New post</div>
            <div className = {s.posts}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />

            </div>
        </div>
    )
};

export default MyPosts;