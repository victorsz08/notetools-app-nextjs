"use client";

import {
  Sidebar,
  SidebarContent,
} from "./ui/sidebar";
import { NavMain } from "./ui/nav-menu";
import { IoLogoChrome } from "react-icons/io";
import { LuShieldCheck } from "react-icons/lu";
import { MdOutlineCheckBox } from "react-icons/md";
import { RiHome9Line, RiStickyNoteLine } from "react-icons/ri";
import { TbReport, TbHomeCheck } from "react-icons/tb";
import { HeaderSidebar } from "./heade-sidebar";
import { Separator } from "./ui/separator";

const items = [
  {
    label: "Dashboard",
    href: "/operacao/dashboard",
    icon: RiHome9Line,
  },
  {
    label: "Contratos",
    href: "/operacao/contratos",
    icon: TbReport,
  },
  {
    label: "Checklist",
    href: "/operacao/checklist",
    icon: MdOutlineCheckBox,
  },
  {
    label: "Notas",
    href: "/operacao/notas",
    icon: RiStickyNoteLine,
  },
  {
    label: "Consultar CPF",
    href: "https://www.google.com",
    icon: LuShieldCheck,
    target: "_blank",
  },
  {
    label: "Consultar CNPJ",
    href: "https://www.google.com",
    icon: TbHomeCheck,
    target: "_blank",
  },
  {
    label: "Site da Claro",
    href: "https://www.claro.com.br",
    icon: IoLogoChrome,
    target: "_blank",
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
        <HeaderSidebar/>
        <Separator className="my-4"/>
        <SidebarContent>
            <NavMain items={items}/>
        </SidebarContent>
    </Sidebar>
  );
}
