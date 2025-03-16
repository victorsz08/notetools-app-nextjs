"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface MenuItemProps {
    children: React.ReactNode;
    href: string;
    target?: React.HTMLAttributeAnchorTarget;
}

export function MenuItem({ children, href, target } : MenuItemProps) {
    const pathname = usePathname();

    return (
        <Link 
            href={href}
            target={target}
            className={`
                flex p-2 rounded-lg justify-items-center font-normal gap-2 w-fit group-hover:w-full 
                group-hover:justify-start items-center hover:text-purple-600 duration-200 
                ${href === pathname ? "bg-purple-600 text-slate-50 hover:text-slate-50" : "text-slate-400"}`}>
            {children}
        </Link>
    );
};