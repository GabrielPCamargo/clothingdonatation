import React, { Component, useEffect, useState } from 'react';
import { useMap } from '../../Contexts/MapProvider/useMap';

interface MarkerProps {
  children?: React.ReactElement<InfoWindow>;
}

interface InfoWindow {
  map: google.maps.Map;
  marker: google.maps.Marker;
}

export function Marker(props: google.maps.MarkerOptions & MarkerProps) {
  const [marker, setMarker] = useState<google.maps.Marker>();
  const { map } = useMap();
  useEffect(() => {
    if (!map) return;
    setMarker(new google.maps.Marker({ ...props, map }));
  }, [map]);

  return (
    <>
      {React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement<InfoWindow>(child, { map, marker });
        }
      })}
    </>
  );
}
