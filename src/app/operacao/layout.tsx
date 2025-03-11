import { MenuItem } from "@/components/ui/menu-item";
import { SibeBar } from "@/components/ui/sidebar";
import { IconType } from "react-icons";
import { IoIosLogOut, IoLogoChrome } from "react-icons/io";
import { LuShieldCheck } from "react-icons/lu";
import { MdOutlineCheckBox } from "react-icons/md";
import { RiHome9Line, RiStickyNoteLine } from "react-icons/ri";
import { SiApacheecharts } from "react-icons/si";
import { TbHomeCheck, TbReport } from "react-icons/tb";

interface ItemProps {
    label: string;
    href: string;
    Icon: IconType;
    target?: React.HTMLAttributeAnchorTarget; 
};


export default function Layout({ children } : { children: React.ReactNode }) {
    const items: ItemProps[] = [
        {
            label: "Dashboard",
            href: "/operacao/dashboard",
            Icon: RiHome9Line
        },
        {
            label: "Contratos",
            href: "/operacao/contratos",
            Icon: TbReport
        },
        {
            label: "Checklist",
            href: "/operacao/checklist",
            Icon: MdOutlineCheckBox
        },
        {
            label: "Notas",
            href: "/operacao/notas",
            Icon: RiStickyNoteLine
        },
        {
            label: "Consultar CPF",
            href: "https://www.google.com",
            Icon: LuShieldCheck
        },
        {
            label: "Consultar CNPJ",
            href: "https://www.google.com",
            Icon: TbHomeCheck
        },
        {
            label: "Site da Claro",
            href: "https://www.claro.com.br",
            Icon: IoLogoChrome
        }
    ];


    return (
        <section className="font-poppins">
            <SibeBar>
                <section className="flex flex-col justify-between h-full">
                    <section className="flex flex-col gap-8 items-center justify-start">
                        <div className="flex group-hover:justify-start items-center gap-2 group-hover:w-full">
                            <SiApacheecharts className="text-4xl text-purple-600"/>
                            <p className="text-lg text-slate-500 font-bold hidden group-hover:block">Notetools</p>
                        </div>
                        <nav className="flex flex-col gap-2 items-center w-full">
                            {items.map((item, index) => (
                                <MenuItem key={index} href={item.href} target={item.target}>
                                    <item.Icon className="text-2xl"/>
                                    <p className="menu-text text-[14px]">{item.label}</p>
                                </MenuItem>
                            ))}
                        </nav>
                    </section>
                    <div>
                        <button className="flex p-2 rounded-lg justify-items-center font-normal gap-2 w-fit group-hover:w-full 
                                group-hover:justify-start items-center text-red-600 bg-red-200">
                            <IoIosLogOut className="text-2xl"/>
                            <p className="menu-text text-[14px]">Sair</p>
                        </button>
                    </div>
                </section>
            </SibeBar>
            <section className="pl-[90px]">
                {children}
            </section>
        </section>
    )
}