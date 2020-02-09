import React from 'react';
import './Profile.css';



const Profile = () => {
    return(
        <div className='content'>
            <div>
                <img src="https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg"/>
            </div>
            {/*<div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
                </div>*/}
            <div>ava +description</div>
            <div>My posts</div>
            <div>New post</div>
            <div>
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    )
};

export default Profile;