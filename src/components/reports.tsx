"use client";

import { CountUpText } from "@/components/count-up";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { HiChartBar, HiPresentationChartLine } from "react-icons/hi";
import { TbChartDonutFilled } from "react-icons/tb";


export function Reports() {
    return (
        <section className="flex items-center gap-4 w-full">
        <Card className="w-full">                    
            <CardContent>
                <div className="text-green-700 w-fit bg-green-200 p-2 mb-10 text-center rounded-lg">
                    <HiChartBar className="text-xl block"/>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <Label 
                            className="text-[0.7rem] font-light text-slate-500"
                        >
                            Faturamento
                        </Label>
                        <div className="flex place-items-baseline">
                            <p className="text-base font-medium text-slate-500">R$</p>
                            <CountUpText from={0} to={4810.90}/>
                        </div>
                    </div>
                    <div>
                        <Label 
                            className="text-[0.7rem] font-light text-slate-500"
                        >
                            Vendas
                        </Label>
                        <div className="flex place-items-baseline">
                            <CountUpText from={0} to={54}/>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
        <Card className="w-full">                    
            <CardContent>
                <div className="text-blue-700 w-fit bg-blue-200 p-2 mb-10 text-center rounded-lg">
                    <TbChartDonutFilled className="text-xl block"/>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <Label 
                            className="text-[0.7rem] font-light text-slate-500"
                        >
                            Instaladas
                        </Label>
                        <div className="flex place-items-baseline">
                            <CountUpText from={0} to={48}/>
                        </div>
                    </div>
                    <div>
                        <Label 
                            className="text-[0.7rem] font-light text-slate-500"
                        >
                            Pendentes
                        </Label>
                        <div className="flex place-items-baseline">
                            <CountUpText from={0} to={4}/>
                        </div>
                    </div>
                    <div>
                        <Label 
                            className="text-[0.7rem] font-light text-slate-500"
                        >
                            Canceladas
                        </Label>
                        <div className="flex place-items-baseline">
                            <CountUpText from={0} to={2}/>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
        <Card className="w-full">                    
            <CardContent>
                <div className="text-orange-700 w-fit bg-orange-200 p-2 mb-10 text-center rounded-lg">
                    <HiPresentationChartLine className="text-xl block"/>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <Label 
                            className="text-[0.7rem] font-light text-slate-500"
                        >
                            Percentual de Instalação
                        </Label>
                        <div className="flex place-items-baseline">
                            <CountUpText from={0} to={97}/>
                            <p className="text-base font-medium text-slate-500">%</p>
                        </div>
                    </div>
                    <div>
                        <Label 
                            className="text-[0.7rem] font-light text-slate-500"
                        >
                            Percentual de Desistência
                        </Label>
                        <div className="flex place-items-baseline">
                            <CountUpText from={0} to={3}/>
                            <p className="text-base font-medium text-slate-500">%</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </section>
    )
}