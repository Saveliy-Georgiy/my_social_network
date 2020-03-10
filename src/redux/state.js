let rerenderEntireTree = () => {
    console.log("rgvtrb");
};

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi", likesCount: 12},
            {id: 2, message: "How Are you?", likesCount: 25},
            {id: 3, message: "blalal", likesCount: 35},
            {id: 4, message: "dadada", likesCount: 21},
        ],
        newPostText: "it-kamasutra",
    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How Are you?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"},
            {id: 6, message: "Yo"},
        ],
        dialogs: [
            {id: 1, name: "Saveliy"},
            {id: 2, name: "Dmitriy"},
            {id: 3, name: "Artem"},
            {id: 4, name: "Alexei"},
            {id: 5, name: "Vadim"},
            {id: 6, name: "Anton"},
        ],
    },
    sidebar: {}
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state;