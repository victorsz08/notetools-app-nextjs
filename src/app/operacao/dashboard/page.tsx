import { SearchRoad } from "@/components/card-search-roads";
import { CurrentOrders } from "@/components/current-orders";
import { DataChart } from "@/components/data-chart";
import { Reports } from "@/components/reports";



export default function Dashboard() {

    return (
        <section className="p-4 h-full w-full flex flex-col gap-4">
            <Reports/>
            <section className="flex gap-5">
                <DataChart/>
                <CurrentOrders/>
            </section>
            <SearchRoad/>
        </section>
    );
};