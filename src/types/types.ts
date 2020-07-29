export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
export type DialogsType = {
    id: number,
    name: string
}
export type MessagesType = {
    id: number,
    message: string
}
export type PhotosType = {
    small: string | null,
    large: string | null
}
export type UserType = {
    id: number
    name: string,
    photos: PhotosType
    status: string,
}