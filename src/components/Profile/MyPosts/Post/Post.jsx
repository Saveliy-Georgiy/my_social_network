import React from 'react';
import s from './Post.module.css';
import avatar1 from './avatar1.jpg'

const Post = (props) => {

    return (
                <div className = {s.item}>
                    <img src={avatar1} alt="avatar"/>
                    {props.message}
                    <div>
                    <span>like</span> {props.likes}
                    </div>
                </div>
    )
};

export default Post;