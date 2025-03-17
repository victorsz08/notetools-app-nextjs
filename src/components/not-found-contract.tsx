"use client";

import { BsHandbagFill } from "react-icons/bs";
import { Button } from "./ui/button";
import { AiOutlinePlus } from "react-icons/ai";


export function NotFoundContract() {
    return (
        <div className="h-full w-full">
            <span className="rounded-full bg-gray-200 mb-6 items-center justify-center p-6 text-slate-600">
                <BsHandbagFill className="w-16 h-16"/>
            </span>
           <div className="flex flex-col items-center gap-2">
            <p className="text-base font-light text-slate-500">Nenhum contrato encontrado</p>
            <Button>
                <p>Criar novo contrato</p>
                <AiOutlinePlus className="w-4 h-4"/>
            </Button>
           </div>
        </div>
    );
}