import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_app-sidebar";



export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <main className="w-full font-poppins">
                <SidebarTrigger className="cursor-pointer"/>
                {children}
            </main>
        </SidebarProvider>
    )
}