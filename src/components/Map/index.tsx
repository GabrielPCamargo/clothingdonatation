import React, { useEffect, useState } from 'react';
import { MapProvider } from '../../Contexts/MapProvider';
import { useMap } from '../../Contexts/MapProvider/useMap';
import { InfoWindow } from '../InfoWindow';
import { Marker } from '../Marker';

export function Map({ children }: { children?: React.ReactElement[] }) {
  const { map } = useMap();

  useEffect(() => {
    if (!map) return;
    map.addListener('click', (e: google.maps.MapMouseEvent) => {
      console.log(e.latLng?.toJSON());
    });
  }, [map]);

  return <MapProvider>{children}</MapProvider>;
}
