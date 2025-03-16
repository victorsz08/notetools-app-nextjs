"use server";

import { loginSchema } from "@/helpers/login.schema";
import { api } from "@/services/api/axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { parseCookies, setCookie } from "nookies";




export async function signIn(prevState: any, formData: FormData) {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const validations = loginSchema.safeParse({ username, password });
    
    if (!validations.success) {
        return {
            message: validations.error.flatten().fieldErrors.username?.[0]
        } 
    };

    const response = await api.post("/auth/login", {
        username,
        password
    }).then(response => {
        return response
    }).catch(error => {
       return error.response
    });

    if (response.status !== 200) {
        return {
            message: response.data.error
        }
    };

    const cookieStore = await cookies();
    
    cookieStore.set("nextauth.token", response.data.token, {
        maxAge: 60 * 60 * 12, // 12 horas
        httpOnly: true,
        path: "/"
    });

    redirect("/operacao/dashboard");
};