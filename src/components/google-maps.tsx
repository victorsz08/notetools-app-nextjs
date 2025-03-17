"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { Input } from "./ui/input";
import { useState } from "react";

const API_KEY =
  process.env.API_KEY || "AIzaSyCdCgL8AphkatcpSsE7EWMgiGpsA3ICm8Y";

export function GoogleMaps() {
  const [road, setRoad] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState<boolean>(false);

  const [makerPosition, setMakerPosition] = useState({
    lat: -23.55052,
    lng: -46.633308,
  });

  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${road}&key=${API_KEY}`
    );
    const data = await response.json();

    console.log(data.status === "ZERO_RESULTS");
    if (data.status === "ZERO_RESULTS") {
      setError(true);
    }

    setMakerPosition({
      lat: data.results[0].geometry.location.lat,
      lng: data.results[0].geometry.location.lng,
    });

    setLocation(data.results[0].formatted_address);
  }

  return (
    <APIProvider apiKey={API_KEY}>
      <div className="w-full h-[600px] rounded-lg relative">
        <section className="absolute w-[400px] z-[1000] p-2">
          <form onSubmit={handleSearch} className="mb-3 mt-14">
            <Input
              name="search"
              className="text-xs placeholder:font-light py-6 placeholder:text-slate-400 bg-white shadow shadow-slate-400"
              placeholder="Buscar logradouros"
              value={road}
              onChange={(e) => {
                setRoad(e.target.value);
                setError(false);
              }}
            />
            {
              <small className="text-red-500 text-xs">
                {error && "Não foi possível encontrar o logradouro"}
              </small>
            }
          </form>
          <div className="mt-3 bg-white px-2 py-3 rounded-sm shadow shadow-slate-400">
            {location && (
              <small className="text-xs font-semibold text-slate-600 mb-2">
                Resultado:
              </small>
            )}
            <p className="text-sm font-normal text-slate-500 text-wrap">
              {location}
            </p>
          </div>
        </section>
        <Map defaultZoom={14} center={makerPosition}>
          <Marker position={makerPosition} draggable={true} />
        </Map>
      </div>
    </APIProvider>
  );
}
