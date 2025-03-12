import { createContext, useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { api } from "@/services/api/axios";

type UserType = {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
};

type AuthContextType = {
    isAuthenticated: boolean;
    user: UserType;
    signIn: (credentials: SignInRequestData) => Promise<void>
};

export type SignInRequestData = {
    username: string;
    password: string;
};


export const AuthContext = createContext({} as AuthContextType);


export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserType | null>(null);
    const isAuthenticated = !!user;

    const cookie = parseCookies();
    const token = cookie['nextauth.token']

    useEffect(() => {
        if(token) {
            getSession().then(response => {
                setUser(response)
            })
        };
    },[token]);

    async function signIn(credentials: SignInRequestData) {
        const data = await api.post("/auth/login", credentials).then(response => response);
        
        setUser(data.data)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, signIn}}>
            {children}
        </AuthContext.Provider>
    )
};

async function getSession() {
    const data = await api.get("/auth/session").then(res => res.data).catch(err => err.data);

    return {
        id: data.id,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName
    };
};


