"use client";

import { GoogleMaps } from "./google-maps";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";




export function SearchRoad() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-slate-600">Buscar Logradouros</CardTitle>
                <CardDescription>Faça sua busca no google maps</CardDescription>
            </CardHeader>
            <Separator/>
            <CardContent>
                <GoogleMaps/>
            </CardContent>
        </Card>
    )
}