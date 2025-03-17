"use client"

import { Label, Pie, PieChart, Tooltip } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  ChartConfig,
  ChartContainer,
} from "./ui/chart";
import { useMemo, useState } from "react";
import { Separator } from "./ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { LuCalendar } from "react-icons/lu";
import { addDays, endOfDay, endOfWeek, startOfDay, startOfMonth, startOfWeek, subDays } from "date-fns";


const chartData = [
  { status: "conectados", contracts: 57, fill: "var(--color-purple-700)" },
  { status: "cancelados", contracts: 13, fill: "var(--color-purple-400)" },
];

const chartConfig = {
  contracts: {
    label: "Contratos",
  },
  conectados: {
    label: "Conectados",
    color: "var(--chart-1)",
  },
  cancelados: {
    label: "Cancelados",
    color: "var(--chart-2)",
  }
} satisfies ChartConfig;

type PeriodType = {
    value: string;
    label: string;
    startDate: Date;
    endDate: Date;
}
const currentDateStart = startOfDay(new Date());
const currentDateEnd = endOfDay(new Date());
const selectPeriodOpetions: PeriodType[] = [
    { value: "month", label: "Mês", startDate: startOfMonth(currentDateStart), endDate: currentDateEnd },
    { value: "week", label: "Semana", startDate: subDays(startOfWeek(new Date()), 1), endDate: addDays(endOfWeek(currentDateEnd), 1) },
    { value: "yesterday", label: "Ontem", startDate: subDays(currentDateStart, 1), endDate: subDays(currentDateEnd, 1) },
    { value: "today", label: "Hoje", startDate: currentDateStart, endDate: currentDateEnd },
 ]

const CustomTooltip = ({ active, payload } : any) => {
  if (active && payload && payload.length) {
    const { name, value, payload: entryPayload, } = payload[0];
    return (
      <div className="bg-white p-2 border border-gray-300 rounded flex items-center gap-1">
        <span className={`w-3 h-3 rounded-full`} style={{ backgroundColor: entryPayload.fill }}></span>
        <p className="text-gray-800">{`${name}: ${value} (${entryPayload.percentage}%)`}</p>
      </div>
    );
  }
  return null;
};

export function DataChart() {
    const [period, setPeriod] = useState("month")

  const totalContracts = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.contracts, 0)
  }, [])

  const dataWithPercentage = chartData.map((entry) => ({
    ...entry,
    percentage: ((entry.contracts / totalContracts) * 100).toFixed(2), // Calcula a porcentagem e formata com duas casas decimais
  }))

  return (
    <Card className="flex flex-col w-[720px] pb-4">
      <CardHeader className="items-center flex justify-between">
        <div>
            <CardTitle className="text-slate-600">Vendas</CardTitle>
            <CardDescription className="text-slate-400 text-[12px] font-light">Relatório de vendas</CardDescription>
        </div>
        <Select name="period" value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-[160px]">
                <div className="flex items-center gap-1 justify-start text-slate-600">
                    <LuCalendar className="w-6 h-6 "/>
                    <SelectValue className="text-xs" placeholder="Selecione uma opção" />
                </div>
            </SelectTrigger>
            <SelectContent className="text-slate-500">
                {selectPeriodOpetions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
      </CardHeader>
      <Separator/>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[220px]"
        >
          <PieChart>
            <Tooltip content={<CustomTooltip />} />
            <Pie
              data={dataWithPercentage}
              dataKey="contracts"
              nameKey="status"
              innerRadius={60}
              strokeWidth={6}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 2}
                          className="text-3xl fill-slate-600 font-bold"
                        >
                          {totalContracts.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 18}
                          className="fill-muted-foreground text-[12px]"
                        >
                          Vendas
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex justify-center items-center gap-3 w-full">
            {chartData.map((data, index) => (
                <div className="flex items-center gap-1" key={index}>
                    <span style={{ backgroundColor: data.fill }} className="w-3 h-3"></span>
                    <p className="text-xs font-light text-slate-500">{data.status}</p>
                </div>
            ) )}
        </div>
      </CardFooter>
    </Card>
  )
}
