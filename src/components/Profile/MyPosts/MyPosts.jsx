import React from 'react';
import s from './MyPosts.module.css';
import avatar1 from './Post/avatar1.jpg'
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p =>  <Post message={p.message} likes={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div className={s.newPost}>
            <textarea
                ref={newPostElement}
            onChange={onPostChange}
                value={props.newPostText}
            />
            </div>
            <div><button onClick={addPost}>Add post</button></div>
            <div><button>Remove</button></div>
            <div>New post</div>
            <div className = {s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;