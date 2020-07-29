import {DialogsType, MessagesType} from "../types/types";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: "Saveliy"},
        {id: 2, name: "Dmitriy"},
        {id: 3, name: "Artem"},
        {id: 4, name: "Alexei"},
        {id: 5, name: "Vadim"},
        {id: 6, name: "Anton"},
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How Are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ] as Array<MessagesType>,
    newMessageBody: "",
};

export type InitialStateType = typeof initialState

export const dialogsReducer = (state = initialState, action: any):InitialStateType => {
    let stateCopy;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
};

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
}

type UpdateNewMessageBodyCreatorActionType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body: string
}

export const sendMessageCreator = ():SendMessageCreatorActionType => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body: string):UpdateNewMessageBodyCreatorActionType =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;