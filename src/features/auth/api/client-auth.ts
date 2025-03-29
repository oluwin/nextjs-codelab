import { configureAuth } from 'react-query-auth';
import storage from "@/utils/storage";
import {AuthUser, LoginDto, LoginWithEmailAndPassword, RegisterDto, RegisterUser} from "@/features/auth";

// Example usage of configureAuth
// async function handleUserResponse({ data }:  any ) {
//     const accessToken = data?.accessToken;
//     storage.setToken(accessToken);
//     storage.setUserData(data?.data);
//     return accessToken;
// }

async function userFn() {
    if (storage.getUserData()) {
        const User = storage.getUserData();
        return User;
    }
    return null;
}

async function loginFn(data: LoginDto) {
    const response = await LoginWithEmailAndPassword(data);
    console.log(response);

    const token = response?.data?.accessToken;
    if (!token) return;

    try {
        const apiResponse = await fetch("/api/auth/set-cookie", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
        });

        storage.setUserData(response?.data?.user);

        const result = await apiResponse.json();
        console.log("API Response:", result);
    } catch (error) {
        console.error("Error sending token:", error);
    }

    return token;
}

async function logoutFn() {
    // storage.clearToken();
    // storage.clearUserData();
    // window.location.replace('/auth');
    try{
        const response = await fetch("/api/auth/logout", {method: "POST"});
        const result = await response.json();
        console.log("API Response:", result);

        window.location.replace("/auth");
    }catch(error){
        console.error("Error logging out", error);
    }
}

async function registerFn(data: RegisterDto) {
    const response = await RegisterUser(data);
    console.log(response);
    return await response;
}

const authConfig = {
    userFn,
    loginFn,
    registerFn,
    logoutFn
};

export const { useLogin, useUser, useRegister, useLogout, AuthLoader } = configureAuth<AuthUser | null,
    unknown,
    LoginDto,
    RegisterDto
>(authConfig)

