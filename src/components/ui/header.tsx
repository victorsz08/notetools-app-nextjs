import Link from "next/link";
import { Avatar } from "./avatar";



export interface HeaderProps {
    name: string;
}


export function Header({ name } : HeaderProps) {
    return (
        <section className="flex justify-between items-center p-6">
            <h1 className="text-2xl font-semibold text-gray-600">Olá, {name}</h1>
            <Link href="/operacao/minha-conta" className="flex items-center gap-2">
                <Avatar name={name}/>
                <p className="text-sm text-slate-500 hover:opacity-25 duration-200">Minha conta</p>
            </Link>
        </section>
    )
}