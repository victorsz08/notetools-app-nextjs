"use client";

import { BsHandbagFill } from "react-icons/bs";
import { CreateContractDialog } from "./create-contract-dialog";


export function NotFoundContract() {
    return (
        <div className="h-full w-full flex justify-center items-center flex-col">
            <span className="rounded-full bg-gray-200 mb-6 items-center justify-center p-6 text-slate-600">
                <BsHandbagFill className="w-16 h-16"/>
            </span>
           <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-light text-slate-500">Nenhum contrato encontrado</p>
            <CreateContractDialog/>
           </div>
        </div>
    );
}