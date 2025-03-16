import React, { useRef, useEffect } from 'react';

type Position = {
    position: {
        lat: number;
        lng: number;
    }
}

export function StreetViewPanorama({ position }: Position) {
  const streetViewRef = useRef(null);

  useEffect(() => {
    if (window.google && streetViewRef.current) {
      const panorama = new window.google.maps.StreetViewPanorama(streetViewRef.current, {
        position: position,
        pov: { heading: 100, pitch: 0 },
        zoom: 1,
      });

      panorama.setVisible(true);
    }
  }, [position]);

  return (
    <div style={{ width: '800px', height: '450px' }}>
      <div ref={streetViewRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};