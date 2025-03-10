import React from "react";




export function MenuItem({ children } : { children: React.ReactNode }) {
    return (
        <div className="flex justify-items-center justify-start text-slate-600 font-normal text-sm gap-1">
            {children}
        </div>
    )
}