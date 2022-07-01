import React, { useEffect, useState } from 'react';
import { MapProvider } from '../../Contexts/MapProvider';
import { useMap } from '../../Contexts/MapProvider/useMap';
import { InfoWindow } from '../InfoWindow';
import { Marker } from '../Marker';

export function Map({
  children,
  onClick,
}: {
  children?: React.ReactElement[] | React.ReactElement;
  onClick?: (e: google.maps.MapMouseEvent) => void;
}) {
  const { map } = useMap();

  useEffect(() => {
    if (!map || !onClick) return;
    map.addListener('click', onClick);
  }, [map]);

  return <>{children}</>;
}
