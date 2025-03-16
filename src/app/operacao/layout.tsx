import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarTriggerButton } from "@/components/sidebar-trigger";
import { Breadcrumb } from "@/components/breadcrumb";

export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar/>
                <main className="w-full overflow-x-hidden">
                    <header className="flex justify-start flex-col gap-2 bg-white">
                        <nav className="flex justify-between p-5 items-center">
                            <div className="flex justify-start items-center gap-1">
                                <SidebarTriggerButton/>
                                <Separator orientation="vertical"/>
                            </div>
                        </nav>
                        <Separator/>
                        <div className="px-5 pb-2">
                            <Breadcrumb/>
                        </div>
                    </header>
                    <Separator/>
                    {children}
                </main>
        </SidebarProvider>
    )
}