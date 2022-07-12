export interface IAuthInput{
    email: string,
    password: string,
}

export interface IAuthResponse {
    refresh?: string,
    access?: string
}

export interface IRegisterInput{
    email: string,
    name: string,
    user_name: string,
    password: string,
    is_active: boolean,
}
