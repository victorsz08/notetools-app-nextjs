import { Breadcrumb, BreadcrumbRoot } from "@/components/ui/breadcrumb";
import { MdBarChart } from "react-icons/md";
import { RiHome9Line, RiPieChart2Fill } from "react-icons/ri";
import { TbMessageReport } from "react-icons/tb";
import { formatDateRange } from "@/lib/format-date";
import { CiCalendarDate } from "react-icons/ci";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";

export default async function Dashboard() {
    const currentDate = new Date();
    const dateRange = formatDateRange(currentDate);

    return (
        <section className="p-6 h-screen w-full">
            <section className="mb-3 flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-600">Olá, Victor Siqueira</h1>
                <Link href="/operacao/minha-conta" className="flex items-center gap-2">
                    <Avatar name="Victor Siqueira"/>
                    <p className="text-sm text-slate-500 hover:opacity-25 duration-200">Minha conta</p>
                </Link>
            </section>
            <div className="flex justify-between items-center w-full">
                <BreadcrumbRoot>
                    <Breadcrumb href="/operacao"><RiHome9Line className="text-sm"/>Operacao</Breadcrumb>
                    <Breadcrumb href="/operacao/dashboard">Dashboard</Breadcrumb>
                </BreadcrumbRoot>
                <p className="font-light text-purple-600 flex items-center gap-1 w-fit">
                    <CiCalendarDate className="text-base"/>
                    <p className="text-xs text-nowrap">{dateRange}</p>
                </p>
            </div>
            <section className="flex items-center gap-5">
                <div className="bg-white p-4 rounded-lg shadow-md w-full flex flex-col">
                    <span className="bg-purple-300 w-fit p-2 rounded-lg text-lg text-purple-700">
                        <MdBarChart />
                    </span>
                    <section className="flex justify-between items-center mt-14">
                        <div>
                            <p className="text-xs font-light text-slate-400">Faturamento</p>
                            <p className="text-3xl font-bold text-purple-700 font-afacad">R$4180,00</p>
                        </div>
                        <div>
                            <p className="text-xs font-light text-slate-400">Total de Vendas</p>
                            <p className="text-3xl font-bold text-purple-700 font-afacad">47</p>
                        </div>
                    </section>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-full flex flex-col">
                    <span className="bg-purple-300 w-fit p-2 rounded-lg text-lg text-purple-700">
                        <TbMessageReport />
                    </span>
                    <section className="flex justify-between items-center mt-14">
                        <div>
                            <p className="text-xs font-light text-slate-400">Vendas instaladas</p>
                            <p className="text-3xl font-bold text-purple-700 font-afacad">39</p>
                        </div>
                        <div>
                            <p className="text-xs font-light text-slate-400">Vendas Pendentes</p>
                            <p className="text-3xl font-bold text-purple-700 font-afacad">5</p>
                        </div>
                        <div>
                            <p className="text-xs font-light text-slate-400">Vendas Canceladas</p>
                            <p className="text-3xl font-bold text-purple-700 font-afacad">3</p>
                        </div>
                    </section>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-full flex flex-col">
                    <span className="bg-purple-300 w-fit p-2 rounded-lg text-lg text-purple-700">
                        <RiPieChart2Fill />
                    </span>
                    <section className="flex justify-between items-center mt-14">
                        <div>
                            <p className="text-xs font-light text-slate-400">Percentual de instalação</p>
                            <p className="text-3xl font-bold text-purple-700 font-afacad">91%</p>
                        </div>
                        <div>
                            <p className="text-xs font-light text-slate-400">Percentual de Desistência</p>
                            <p className="text-3xl font-bold text-purple-700 font-afacad">9%</p>
                        </div>
                    </section>
                </div>
            </section>
        </section>
    );
};