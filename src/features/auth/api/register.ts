import {axios} from "@/lib/axios";
import {RegisterDto} from "@/features/auth";

export const RegisterUser = (data:RegisterDto):Promise<any> => {
    return axios.post('/auth/register', data)
}
