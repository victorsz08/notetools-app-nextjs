import { Breadcrumb, BreadcrumbRoot } from "@/components/ui/breadcrumb";
import { MdBarChart } from "react-icons/md";
import { RiHome9Line, RiPieChart2Fill } from "react-icons/ri";
import { TbMessageReport } from "react-icons/tb";
import { formatDateRange } from "@/lib/format-date";
import { CiCalendarDate } from "react-icons/ci";
import { StatLabel, StatRoot, StatValueText } from "@/components/ui/stat";

export default async function Dashboard() {
    const currentDate = new Date();
    const dateRange = formatDateRange(currentDate);

    return (
        <section className="px-6 h-screen w-full">
            <div className="flex justify-between items-center w-full">
                <BreadcrumbRoot>
                    <Breadcrumb href="/operacao"><RiHome9Line className="text-sm"/>Operacao</Breadcrumb>
                    <Breadcrumb href="/operacao/dashboard">Dashboard</Breadcrumb>
                </BreadcrumbRoot>
            </div>
            <section className="flex items-center gap-5 mt-3">
                <StatRoot>
                    <span className="bg-blue-300 w-fit p-2 rounded-lg text-lg text-blue-700">
                        <MdBarChart />
                    </span>
                    <section className="flex justify-between items-center mt-14">
                        <div>
                            <StatLabel>Faturamento</StatLabel>
                            <StatValueText>R$4812,00</StatValueText>
                        </div>
                        <div>
                            <StatLabel>Vendas Totais</StatLabel>
                            <StatValueText>50</StatValueText>
                        </div>
                    </section>
                </StatRoot>
                <StatRoot>
                    <span className="bg-orange-300 w-fit p-2 rounded-lg text-lg text-orange-700">
                        <TbMessageReport />
                    </span>
                    <section className="flex justify-between items-center mt-14">
                        <div>
                            <StatLabel>Concluídos</StatLabel>
                            <StatValueText>40</StatValueText>
                        </div>
                        <div>
                            <StatLabel>Pendentes</StatLabel>
                            <StatValueText>6</StatValueText>
                        </div>
                        <div>
                            <StatLabel>Cancelados</StatLabel>
                            <StatValueText>4</StatValueText>
                        </div>
                    </section>
                </StatRoot>
                <StatRoot>
                    <span className="bg-green-300 w-fit p-2 rounded-lg text-lg text-green-700">
                        <RiPieChart2Fill />
                    </span>
                    <section className="flex justify-between items-center mt-14">
                        <div>
                            <StatLabel>Percentual de Instalação</StatLabel>
                            <StatValueText>94%</StatValueText>
                        </div>
                        <div>
                            <StatLabel>Percentual de Desistência</StatLabel>
                            <StatValueText>6%</StatValueText>
                        </div>
                    </section>
                </StatRoot>
            </section>
            <section className="flex items-center gap-4">
                
            </section>
        </section>
    );
};