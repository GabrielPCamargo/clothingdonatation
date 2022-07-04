import React, { useEffect } from 'react';
import { useMap } from '../../Contexts/MapProvider/useMap';

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
