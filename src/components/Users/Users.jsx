import React from "react";
import styles from "./users.module.css";
import avatar from "../../avatars/Dmitry.jpg";

let Users = (props) => {
    debugger;
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: avatar,
                    followed: false,
                    fullName: "Dmitry",
                    status: "I'm a boss",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 2,
                    photoUrl: avatar,
                    followed: true,
                    fullName: "Saveliy",
                    status: "I'm a boss too",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 3,
                    photoUrl: avatar,
                    followed: false,
                    fullName: "Alexandr",
                    status: "I'm a boss too",
                    location: {city: "Moscow", country: "Russia"}
                },
            ]
        );
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id);
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id);
                        }}>Follow</button>}

                </div>
            </span>
                <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                     <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
            </div>)
        }
    </div>;
};

export default Users;