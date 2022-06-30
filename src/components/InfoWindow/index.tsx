import React, { useEffect, useState } from 'react';
import { renderToString } from 'react-dom/server';

interface InfoWindow {
  map?: google.maps.Map;
  marker?: google.maps.Marker;
  children: React.ReactElement;
}

export function InfoWindow({ children, map, marker }: InfoWindow) {
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow>();

  useEffect(() => {
    if (!map || !marker) return;
    setInfoWindow(
      new google.maps.InfoWindow({
        content: renderToString(children),
      })
    );

    if (!infoWindow) return;

    marker.addListener('click', () => {
      infoWindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }, [map, marker]);
  return <></>;
}
