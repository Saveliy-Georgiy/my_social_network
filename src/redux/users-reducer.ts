import {PhotosType, UserType} from "../types/types";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
    ] as Array<UserType>,
    newPostText: "",
};

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return{...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
};

type followACActionType = {
    type: typeof FOLLOW
    userId: number
}

type unfollowACActionType = {
    type: typeof UNFOLLOW
    userId: number
}

type setUsersACActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

export const followAC = (userId: number): followACActionType => ({type: FOLLOW, userId});
export const unfollowAC = (userId : number): unfollowACActionType => ({type: UNFOLLOW, userId});
export const setUsersAC = (users: Array<UserType>): setUsersACActionType => ({type: SET_USERS, users});

export default usersReducer;