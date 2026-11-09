export interface UpdateUserDto {
    name?:string,
    email?:string,
    passwordHash?:string

}

export interface DeleteUser {
    active?:boolean
}