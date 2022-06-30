import React, { useEffect, useState } from 'react';
import personMarker from '../../assets/icons/personMarker.svg';
import { MapProvider } from '../../Contexts/MapProvider';
import { useMap } from '../../Contexts/MapProvider/useMap';
import { InfoWindow } from '../InfoWindow';
import { Marker } from '../Marker';

export function Map() {
  const { map } = useMap();

  useEffect(() => {
    if (!map) return;
    map.addListener('click', (e: google.maps.MapMouseEvent) => {
      console.log(e.latLng?.toJSON());
    });
  }, [map]);

  return (
    <MapProvider>
      <Marker
        icon={personMarker}
        position={{ lat: -30.09733223303355, lng: -51.312168162811176 }}
      >
        <InfoWindow>
          <h1>Testefdasfafakjflakfjlakjfalk</h1>
        </InfoWindow>
      </Marker>
      <Marker
        icon={personMarker}
        position={{ lat: -30.118419410174702, lng: -51.35079197262563 }}
      >
        <InfoWindow>
          <h3>Meu teste 123</h3>
        </InfoWindow>
      </Marker>
    </MapProvider>
  );
}
