"use client";

import CountUp, { CountUpProps } from "@/blocks/TextAnimations/CountUp/CountUp";


export function CountUpText({ ...props }: CountUpProps) {
    return (
        <CountUp
            {...props}
            duration={0.5}
            className="count-text-up text-2xl font-semibold text-slate-700"
        />
    );
}