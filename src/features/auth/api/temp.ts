import {configureAuth} from "react-query-auth";
import storage from "@/utils/storage";
import {LoginDto, LoginWithEmailAndPassword, RegisterDto, AuthUser} from "@/features/auth";



async function handleUserResponse({data}: any) {
    const accessToken = data?.accessToken;
    storage.setToken(accessToken);
    storage.setUserData(data?.user);
    return accessToken;
}

async function userFn() {
    if (storage.getUserData()) {
        const user = storage.getUserData()
        return user
    }
    return null
}

async function loginFn(data: LoginDto) {
    const response = await LoginWithEmailAndPassword(data)
    console.log(response)
    return await handleUserResponse(response)
}

async function logOutFn() {
    storage.clearToken()
    storage.clearUserData()
    window.location.replace("/")
}

async function registerFn(data: any) {
    const response = await LoginWithEmailAndPassword(data)
    return await response
}

const authConfig = {
    userFn,
    loginFn,
    registerFn,
    logOutFn,
}

export const {useLogin, useUser, useRegister, useLogout, AuthLoader} = configureAuth<
    AuthUser | null,
    unknown,
    LoginDto,
    RegisterDto
>(authConfig)