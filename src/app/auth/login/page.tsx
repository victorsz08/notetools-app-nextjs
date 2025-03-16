"use client"

import { signIn } from "@/app/actions/sign-in";
import { Button } from "@/components/ui/button";
import { InputText } from "@/components/ui/input-text";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useActionState } from "react";
import { SiApacheecharts } from "react-icons/si";


export default function LoginPage() {
    const inicialState = {
        message: ""
    };

    const [state, formAction, pending] = useActionState(signIn, inicialState)
    return (
        <section className="font-poppins bg-slate-200 h-screen w-screen grid justify-center items-center">
            <div className="bg-white rounded-lg px-8 py-10">
                <div className="flex flex-col gap-2 items-center">
                    <SiApacheecharts className="text-2xl text-purple-500"/>
                    <div className="text-center mb-4">
                        <p className="text-xl font-semibold text-slate-500">Login</p>
                        <small className="font-light text-xs text-slate-400">Entre na sua conta para continuar</small>
                    </div>
                </div>
                <Separator/>
                <form action={formAction}>
                    <div className="text-start mb-6 flex flex-col gap-1">
                        <label className="text-xs font-medium text-slate-500">Username</label>
                        <InputText type="text" name="username" invalid={state.message ? true : false}/>
                        {state.message && (
                            <p className="text-red-600 text-xs font-light">{state.message}</p>
                        )}
                    </div>
                    <div className="text-start mb-1 flex flex-col gap-1">
                        <label className="text-xs font-medium text-slate-500">Senha</label>
                        <InputText type="password" name="password" invalid={state.message ? true : false}/>
                        {state.message && (
                            <p className="text-red-600 text-xs font-light">{state.message}</p>
                        )}
                    </div>
                    <div className="mb-4 text-end">
                        <Link href="/recuperar-acessso" className="text-xs text-blue-500 font-normal
                         hover:text-blue-700 duration-200 hover:underline">
                            Esqueceu a senha?
                        </Link>
                    </div>
                    <Button type="submit" loading={pending}>Entrar</Button>
                </form>
                <Separator/>
                <div className="text-center">
                    <p className="text-sm font-semibold text-slate-500">Notetools</p>
                    <small className="text-xs font-light text-slate-400">Copyright 2024 - 2025 - v2.0.1</small>
                </div>
            </div>
        </section>
    )
}