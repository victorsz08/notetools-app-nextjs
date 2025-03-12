"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment, isValidElement } from "react";



export interface BreadcrumbProps {
    children?: React.ReactNode;
    href: string;
};

export interface BreadcrumbRootProps {
  children: React.ReactNode;
};


export function BreadcrumbRoot({ children }: BreadcrumbRootProps) {
    const listChildren = React.Children.toArray(children).filter(isValidElement);

    console.log(listChildren)

    return (
        <nav className="flex items-center gap-1 w-full my-4">
            {listChildren.map((child, index) => (
                <Fragment key={index}>
                    {child}
                    {index < listChildren.length - 1 && (
                        <span className="text-slate-500 text-xs font-medium">{" / "}</span>
                    )}
                </Fragment>
            ))}
        </nav>
    )
};

export function Breadcrumb({ children, href }: BreadcrumbProps) {
    const pathname = usePathname();

    return (
        <a href={href} className={`text-xs font-normal flex items-center gap-1 hover:text-slate-700 duration-200 
            ${pathname === href ? "text-slate-600" : "text-slate-400"}`}>
            {children}
        </a>
    )
}