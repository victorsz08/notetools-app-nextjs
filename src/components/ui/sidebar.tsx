"use client";

import React, { useState } from "react";




export function SibeBar({ children } : { children: React.ReactNode }) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <section 
            className={`bg-white fixed h-full transition-all p-4 duration-200 ${open ? "w-[280px]" : "w-[80px]"}`}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            >
            {children}
        </section>
    )
}