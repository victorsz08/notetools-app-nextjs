import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarTriggerButton } from "@/components/sidebar-trigger";
import { Breadcrumb } from "@/components/breadcrumb";


export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar/>
                <main className="w-full">
                    <header className="flex justify-start p-5 flex-col gap-2">
                        <SidebarTriggerButton/>
                        <Breadcrumb/>
                    </header>
                    <Separator/>
                    {children}
                </main>
        </SidebarProvider>
    )
}