import React from 'react';
import s from './ProfileInfo.module.css';
import background from './background.jpg'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.background}>
                <img src={background}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;