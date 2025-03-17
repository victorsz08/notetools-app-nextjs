"use client";

import { api } from "@/services/api/axios";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { cookies } from "next/headers";


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
        const token = Cookies.get("nextauth.token");

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
        Cookies.remove("nextauth.token", {
            path: "/",
            sameSite: "lax",
        });
        
        setUser(null);
        return redirect("/auth/login");
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