"use client";

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";
import { IconType } from "react-icons";
import { IoLogoChrome } from "react-icons/io";
import { LuShieldCheck } from "react-icons/lu";
import { MdOutlineCheckBox } from "react-icons/md";
import { RiHome9Line, RiStickyNoteLine } from "react-icons/ri";
import { SiApacheecharts } from "react-icons/si";
import { TbHomeCheck, TbReport } from "react-icons/tb";

interface ItemProps {
    label: string;
    href: string;
    icon: IconType;
    target?: React.HTMLAttributeAnchorTarget; 
};


export function AppSidebar() {
    const items: ItemProps[] = [
        {
            label: "Dashboard",
            href: "/operacao/dashboard",
            icon: RiHome9Line
        },
        {
            label: "Contratos",
            href: "/operacao/contratos",
            icon: TbReport
        },
        {
            label: "Checklist",
            href: "/operacao/checklist",
            icon: MdOutlineCheckBox
        },
        {
            label: "Notas",
            href: "/operacao/notas",
            icon: RiStickyNoteLine
        },
        {
            label: "Consultar CPF",
            href: "https://www.google.com",
            icon: LuShieldCheck
        },
        {
            label: "Consultar CNPJ",
            href: "https://www.google.com",
            icon: TbHomeCheck
        },
        {
            label: "Site da Claro",
            href: "https://www.claro.com.br",
            icon: IoLogoChrome
        }
    ];


    return (
        <Sidebar className="font-poppins" collapsible="icon">
            <SidebarHeader>
                <SiApacheecharts className="text-2xl text-purple-700"/>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup className="group-data-[collapsible=icon]:hidden">
                    <SidebarGroupContent>
                        {items.map((item, index) => (
                            <SidebarMenuItem key={index}>
                                <SidebarMenuButton>
                                    <Link href={item.href} target={item.target}>
                                       <item.icon className="w-4 h-4"/>
                                        <span>{item.label}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}