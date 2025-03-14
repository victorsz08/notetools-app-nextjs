import { SiApacheecharts } from "react-icons/si";
import { SidebarHeader } from "./ui/sidebar";

export function HeaderSidebar() {
    return (
        <SidebarHeader className="flex flex-row items-center gap-2 px-3 pt-4">
            <SiApacheecharts className="text-2xl text-purple-700" />
            <span className="text-lg font-bold text-slate-600 group-data-[collapsible=icon]:hidden">Notetools</span>
        </SidebarHeader>
    )
}