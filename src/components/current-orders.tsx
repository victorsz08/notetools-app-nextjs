"use client";

import { LuCopy } from "react-icons/lu";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { CopyButton } from "./copy-button";
import { Badge } from "./ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { IoIosArrowBack } from "react-icons/io";


export function CurrentOrders() {
    const currentDate = new Date();
    const currentDayWeekLong = currentDate.toLocaleDateString('pt-BR', { weekday: 'long' });
    const currentDay = currentDate.toLocaleDateString('pt-BR', { day: '2-digit' });
    const currentMonth = currentDate.toLocaleDateString('pt-BR', { month: 'long' });

    return (
        <Card className="w-full pb-4 overflow-y-scroll">
            <CardHeader className="flex flex-col gap-0">
                <CardTitle className="text-slate-600">Contratos Recentes</CardTitle>
                <CardDescription className="text-slate-400 text-[12px] font-light">
                    {currentDayWeekLong.charAt(0).toUpperCase() + currentDayWeekLong.slice(1)}, {" "}
                    {currentDay} de {currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)}
                </CardDescription>
            </CardHeader>
            <Separator/>
            <CardContent>
                <Table className="w-full text-xs">
                    <TableCaption className="text-xs font-light">Todos os contratos pendentes de hoje</TableCaption>
                    <TableHeader>
                        <TableRow className="text-slate-400">
                            <TableHead>N° do Contrato</TableHead>
                            <TableHead>Cidade</TableHead>
                            <TableHead>Agendamento</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Editar</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="text-slate-500 font-normal">
                        <TableRow>
                            <TableCell className="flex items-center gap-2">
                                <CopyButton value="12344567"/> 5454841
                            </TableCell>
                            <TableCell>Campina Grande / PB</TableCell>
                            <TableCell>12/03 - 12h as 15h</TableCell>
                            <TableCell>
                                <Badge className="bg-orange-300 text-orange-700">Pendente</Badge>
                            </TableCell>
                            <TableCell>
                                <DropdownMenu >
                                    <DropdownMenuTrigger 
                                        className="py-1 px-2 rounded-sm bg-slate-200 cursor-pointer">
                                            Editar
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem 
                                            className="text-[12px] text-slate-500">
                                                Editar Agendamento
                                        </DropdownMenuItem>
                                        <DropdownMenuItem 
                                            className="text-[12px] text-slate-500">
                                                Editar Status
                                        </DropdownMenuItem>
                                        <DropdownMenuItem 
                                            className="text-red-600 text-[12px]">
                                                Excluir
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}