import {PostsType} from "../types/types";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: "Hi", likesCount: 12},
        {id: 2, message: "How Are you?", likesCount: 25},
        {id: 3, message: "blalal", likesCount: 35},
        {id: 4, message: "dadada", likesCount: 21},
    ] as Array<PostsType>,
    newPostText: "",
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
};

type AddPostActionCreatorActionType = {
    type: typeof ADD_POST
}

type UpdateNewPostTextActionCreatorActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

export const addPostActionCreator = ():AddPostActionCreatorActionType => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text:string):UpdateNewPostTextActionCreatorActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;