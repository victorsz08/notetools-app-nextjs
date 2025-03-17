"use client";

import { LuCopy } from "react-icons/lu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { CopyButton } from "./copy-button";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { IoIosArrowBack } from "react-icons/io";
import { useSession } from "@/app/context/session-context";
import {
  FindContractInput,
  FindContractOutput,
  findContracts,
} from "@/app/actions/contracts/find.action";
import { useEffect, useState } from "react";
import { ContractType } from "@/types";
import { endOfDay, format, startOfDay } from "date-fns";
import { NotFoundContract } from "./not-found-contract";

export function CurrentOrders() {
  const { user } = useSession();
  const [contractsToday, setContractsToday] = useState<ContractType[]>([]);
  const [infoContract, setInfoContract] = useState<FindContractOutput>();
  const currentDate = new Date();

  const currentDayWeekLong = currentDate.toLocaleDateString("pt-BR", {
    weekday: "long",
  });
  const currentDay = currentDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
  });
  const currentMonth = currentDate.toLocaleDateString("pt-BR", {
    month: "long",
  });

  useEffect(() => {
    if (!user) return;
    const getContractsToday = async () => {
      const input: FindContractInput = {
        userId: user.id,
        page: 1,
        scheduleDateIn: startOfDay(currentDate).toISOString(),
        scheduleDateOut: endOfDay(currentDate).toISOString(),
      };

      await findContracts(input)
        .then((response) => {
          setInfoContract(response.data);
          setContractsToday(response.data.contracts);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getContractsToday();
  }, [user]);

  return (
    <Card className="w-full pb-4 overflow-y-scroll">
      <CardHeader className="flex flex-col gap-0">
        <CardTitle className="text-slate-600">Contratos Recentes</CardTitle>
        <CardDescription className="text-slate-400 text-[12px] font-light">
          {currentDayWeekLong.charAt(0).toUpperCase() +
            currentDayWeekLong.slice(1)}
          , {currentDay} de{" "}
          {currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)}
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent>
        {infoContract?.totalItems === 0 || !infoContract  ?
            <NotFoundContract/>
            :
        <Table className="w-full text-xs">
          <TableCaption className="text-xs font-light">
            {infoContract && infoContract.totalItems} contrato(s) agendado(s) para hoje
          </TableCaption>
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
            {contractsToday &&
              contractsToday.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="flex items-center gap-2">
                    <CopyButton value={item.number.toString()} /> {item.number}
                  </TableCell>
                  <TableCell>{item.local}</TableCell>
                  <TableCell>
                    {format(item.scheduleDate, "dd/MM/yyyy")}{" "}
                    {item.scheduleTime}
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-orange-300 text-orange-700">
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="py-1 px-2 rounded-sm bg-slate-200 cursor-pointer">
                        Editar
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="text-[12px] text-slate-500">
                          Editar Agendamento
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-[12px] text-slate-500">
                          Editar Status
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600 text-[12px]">
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>}
      </CardContent>
    </Card>
  );
}
