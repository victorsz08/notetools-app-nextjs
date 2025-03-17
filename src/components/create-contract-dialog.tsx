"use client";

import { Button } from "./ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "./ui/dialog";
import { Input } from "./ui/input";
import { useActionState, useCallback, useEffect, useState } from "react";
import { createContract } from "@/app/actions/contracts/create.action";
import { LoaderButton } from "./ui/loader-button";

const initialState = {
    message: {},
}

export function CreateContractDialog() {
    const [state, formAction, pending] = useActionState(createContract, initialState);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="cursor-pointer">
                    <p>Criar novo contrato</p>
                    <AiOutlinePlus className="w-4 h-4"/>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Novo contrato</DialogTitle>
                    <DialogDescription>Preencha todas as informações</DialogDescription>
                </DialogHeader>
                <form action={formAction}>
                    <Input name="number"  placeholder="N° do contrato"/>
                    {state.message.number && (
                        <p className="text-red-600 text-xs font-light">{state.message.number}</p>
                    )}
                    <div className="flex justify-end items-center gap-2 mt-4">
                        <Button type="submit" className="py-4 cursor-pointer" disabled={pending}>
                            {pending ? <LoaderButton/> : "Criar"}
                        </Button>
                        <DialogClose asChild>
                            <Button type="button" className="py-4 bg-slate-500 hover:bg-slate-400 cursor-pointer">Cancelar</Button>
                        </DialogClose>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
};




