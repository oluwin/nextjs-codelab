import {axios} from "@/lib/axios";
import {LoginDto} from "@/features/auth";

export const LoginWithEmailAndPassword = (data:LoginDto):Promise<any> => {
    return axios.post('/auth/login', data)
}
