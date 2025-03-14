"use client";

import { Collapsible } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

export function NavMain({
  items,
}: {
  items: {
    label: string;
    href: string;
    icon: IconType;
    isActive?: boolean;
    target?: React.HTMLAttributeAnchorTarget;
  }[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarMenu className="w-full group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:items-center">
        {items.map((item) => (
          <Link
            href={item.href}
            target={item.target}
            key={item.label}
            className="flex items-center gap-2 data-[active:true]:cursor-pointer"
          >
            <Collapsible
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem
                className="w-full"
              >
                <SidebarMenuButton
                    tooltip={item.label}
                    isActive={item.href === pathname}
                    className="data-[active=true]:text-white
                    text-slate-500 data-[active=true]:bg-purple-700 cursor-pointer"
                    >
                        <item.icon/>
                        <span>{item.label}</span>
                    </SidebarMenuButton>
              </SidebarMenuItem>
            </Collapsible>
          </Link>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
