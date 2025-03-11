import React from "react";


export function SibeBar({ children } : { children: React.ReactNode }) {
    return (
        <section 
            className={`bg-white fixed h-full transition-all p-4 duration-200 w-[90px] hover:w-[280px] group`}
            >
            {children}
        </section>
    )
}