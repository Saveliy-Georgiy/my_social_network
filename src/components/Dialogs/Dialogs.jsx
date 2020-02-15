import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog  + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
};

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               <DialogItem name="Saveliy" id="1"/>               <DialogItem name="Dmitriy" id="2"/>
               <DialogItem name="Artem" id="3"/>
               <DialogItem name="Alexei" id="4"/>
               <DialogItem name="Vadim" id="5"/>
               <DialogItem name="Anton" id="6"/>
           </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How Are you?"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
            </div>
            </div>
    )
};

export default Dialogs;