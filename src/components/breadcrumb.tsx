"use client";

import { usePathname } from "next/navigation";
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "./ui/breadcrumb";
import { HouseIcon } from "lucide-react";
import { IoHome } from "react-icons/io5";
import { Fragment } from "react";




export function Breadcrumb() {
    const pathname = usePathname();
    const listPath = pathname.split("/").filter((path) => path !== "");
    const items = listPath.map((item) => item.charAt(0).toUpperCase() + item.slice(1));


    return (
        <BreadcrumbList className="font-light text-xs p-1">
            <BreadcrumbItem>
                <IoHome className="text-sm"/>
            </BreadcrumbItem>
            {items.map((path, index) => (
                <Fragment key={index}>
                    <BreadcrumbItem  
                        className={`${index === items.length -1 ? "text-slate-600" : "text-slate-400"}`}>
                    <BreadcrumbLink href={`/${path}`}>{path.split("")}</BreadcrumbLink>
                    </BreadcrumbItem>
                {index < (items.length - 1) && <BreadcrumbSeparator/>}
                </Fragment>
            ))}
        </BreadcrumbList>
    )
}