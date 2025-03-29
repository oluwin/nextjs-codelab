import { z } from "zod"

export const loginSchema = z.object({
    username: z.string(),
    password: z.string()
})

export const signUpSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
    role: z.string(),

})

export type LoginDto = z.infer<typeof loginSchema>
export type RegisterDto = z.infer<typeof signUpSchema>

export type AuthUser = {
    id: string;
    username: string;
    password: string;
    email: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}