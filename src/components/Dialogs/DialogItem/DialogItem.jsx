import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import avatar1 from "../../../avatars/avatar1.jpg";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
       /* <div className={s.dialog  + ' ' + s.active}>
            <img src={avatar1} alt="avatar"/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>*/
            <div className={s.message}>
                <img src={avatar1} alt="avatar"/>
                <div className={s.commentBubble}>
                    <NavLink className={s.userName} to={path}>{props.name}</NavLink>
                    {/*<div className={s.time}>{this.props.timeAdded}</div>*/}
                </div>


        </div>
    )
};

export default DialogItem;