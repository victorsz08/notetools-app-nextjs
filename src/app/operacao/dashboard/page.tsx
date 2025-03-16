import { SearchRoad } from "@/components/card-search-roads";
import { CurrentOrders } from "@/components/current-orders";
import { DataChart } from "@/components/data-chart";
import { Reports } from "@/components/reports";
import { Card } from "@/components/ui/card";


export default function Dashboard() {

    return (
        <section className="p-4 h-screen w-full flex flex-col gap-4">
            <Reports/>
            <section className="flex gap-5">
                <DataChart/>
                <CurrentOrders/>
            </section>
            <SearchRoad/>
        </section>
    );
};