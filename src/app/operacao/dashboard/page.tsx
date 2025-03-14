"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CountUp from '../../../blocks/TextAnimations/CountUp/CountUp'

export default function Dashboard() {

    return (
        <section className="p-4 h-screen w-full">
            <section className="flex items-center gap-4 w-full">
                <Card className="w-full">                    <CardHeader>
                        <CardTitle className="font-medium">
                            Faturamento
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <p className="scroll-m-20 text-xl font-semibold tracking-tight">Total</p>
                            <CountUp
                                to={4180.10}
                                onStart={0}
                                onEnd={4801}
                                from={4810}
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />
                        </div>
                    </CardContent>
                </Card>
            </section>
        </section>
    );
};