import { z } from "zod";




export interface LoginSchema {
    email: string;
    password: string;
};

export const loginSchema = z.object({
    username: z.string()
        .min(1, { message: "Campo obrigatório" }),
    password: z.string()
        .min(1, { message: "Campo obrigatório" }),
})