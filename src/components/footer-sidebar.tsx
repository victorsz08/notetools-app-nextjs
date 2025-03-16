"use client";

import { LuUser } from "react-icons/lu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import Link from "next/link"

export function FooterSidebar() {
    return (
        <SidebarFooter className="w-full">
          <SidebarMenu className="w-full">
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full">
                  <SidebarMenuButton 
                    className="cursor-pointer duration-200
                      bg-purple-200 text-purple-700 hover:bg-purple-300 hover:text-purple-800">
                    <LuUser className="text-xl"/>
                    <p className="text-sm">Victor Siqueira</p>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="min-w-[12rem]"
                >
                  <DropdownMenuItem>
                    <Link href="/operacao/meu-perfil">Meu Perfil</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-red-300 cursor-pointer">
                    <span className="text-red-600">Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    )
} 