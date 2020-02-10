import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";



const Profile = () => {
    return(
        <div className = {s.content}>
            <div>
                <img src="https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg"/>
            </div>
            {/*<div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
                </div>*/}
            <div>
                ava +description
            </div>
            <MyPosts />
        </div>
    )
};

export default Profile;