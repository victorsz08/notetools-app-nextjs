"use client";

import { AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";
import { useState, useCallback } from "react";

export function MarkerWithInfoWindow ({ position, info }: { position: { lat: number; lng: number }; info: string }) {
    const [markerRef, marker] = useAdvancedMarkerRef();
    const [infoWindowShown, setInfoWindowShown] = useState(false);

    const handleMarkerClick = useCallback(() => setInfoWindowShown((isShown) => !isShown), []);
    const handleClose = useCallback(() => setInfoWindowShown(false), []);

    return (
        <>
            <AdvancedMarker ref={markerRef} position={position} onClick={handleMarkerClick} />

            {infoWindowShown && marker && (
                <InfoWindow anchor={marker} onClose={handleClose}>
                    <h2 className="font-bold text-lg">{info}</h2>
                    <p>Localização encontrada no mapa.</p>
                </InfoWindow>
            )}
        </>
    );
};
