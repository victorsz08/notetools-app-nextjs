"use client";

import { LuCopy } from "react-icons/lu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";


export function CopyButton({ value } : { value: string }) {
    const handleCopy = () => {
        navigator.clipboard.writeText(value);
    };

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <LuCopy 
                        className="w-4 h-4 hover:text-slate-900 text-slate-600 duration-200 cursor-pointer" 
                        onClick={handleCopy}/>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="text-xs">Copiar</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
};