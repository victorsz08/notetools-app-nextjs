"use client";

import { api } from "@/services/api/axios";
import { redirect } from "next/navigation";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { createContext, useContext, useEffect, useState } from "react";

type SignInRequestData = {
    username: string;
    password: string;
};

type SignInResponseData = {
    success?: boolean;
    error?: string;
};

type UserType = {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
};

type AuthContextType = {
    isAuthenticated: boolean;
    loading: boolean;
    user: UserType | null;
    signOut: () => void;
};


export const AuthContext = createContext({} as AuthContextType);


export function SessionContext({ children } : { children: React.ReactNode }) {
    const [user, setUser] = useState<UserType | null>(null);
    const [loading, setLoading] = useState(false);
    const isAuthenticated = !!user;

    useEffect(() => {
        const cookies = parseCookies();
        const token = cookies['nextauth.token'];
        
        if(token) {
            setLoading(true);
            getSessionUser().then((response) => {
                if(response.status !== 200) {
                    redirect("/auth/login");
                };
                setUser(response.data);
            })
        };

    },[]);


    async function signOut() {
        destroyCookie(undefined, 'nextauth.token');
        setUser(null);
        redirect("/auth/login");
    };

    return (
        <AuthContext.Provider value={{ 
            isAuthenticated,
            loading,
            user,
            signOut
         }}>
            {children}
        </AuthContext.Provider>
    )
};

export async function getSessionUser() {
    const data = await api.get("/auth/session").then((response) => {
        return response
    });

    return data;
};

export const useSession = () => useContext(AuthContext);