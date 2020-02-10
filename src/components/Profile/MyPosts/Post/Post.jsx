import React from 'react';
import s from './Post.module.css';
import avatar1 from './avatar1.jpg'

const Post = () => {
    return (
                <div className = {s.item}>
                    <img src={avatar1} alt="avatar"/>
                    post 1
                    <div>
                    <span>
                        like
                    </span>
                    </div>
                </div>
    )
};

export default Post;