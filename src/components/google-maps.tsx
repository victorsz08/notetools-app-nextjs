"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { StreetViewPanorama } from "./street-view-panorama";
import { Input } from "./ui/input";
import React, { useState } from "react";
import { Separator } from "./ui/separator";

const API_KEY = process.env.API_KEY || "AIzaSyCdCgL8AphkatcpSsE7EWMgiGpsA3ICm8Y";

export function GoogleMaps() {
    const [road, setRoad] = useState("");
    const [location, setLocation] = useState("");
    const [center, setCenter] = useState({
        lat: -23.550520,
        lng: -46.633308,
    });

    async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${road}&key=${API_KEY}`);
        const data = await response.json();
        setCenter({
            lat: data.results[0].geometry.location.lat,
            lng: data.results[0].geometry.location.lng,
        });
        console.log(center)
        setLocation(data.results[0].formatted_address);
    }

    return (
        <APIProvider apiKey={API_KEY}>
        <div className="w-full h-[500px] rounded-lg relative">
            <section  className="bg-white rounded-sm absolute my-6 mx-4 w-[400px] z-[1000] px-4 py-6 
                shadow-sm shadow-slate-500">
                <form onSubmit={handleSearch} className="mb-3">
                    <Input placeholder="Buscar logradouros" value={road} onChange={(e) => setRoad(e.target.value)}/>
                </form>
                <Separator/>
                <p className="text-sm font-normal text-slate-600 mt-3 text-wrap">
                    {location}
                </p>
            </section>
            <Map defaultZoom={14} center={center}>
                <Marker position={center}/>
            </Map>
        </div>
        </APIProvider>
    );
}
