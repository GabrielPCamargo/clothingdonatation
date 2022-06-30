import React, { createContext, useEffect, useState } from 'react';
import { MapContextType } from './types';
import { Loader } from '@googlemaps/js-api-loader';

export const MapContext = createContext<MapContextType>({} as MapContextType);

export function MapProvider({ children }: { children: React.ReactNode }) {
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_API_KEY || '',
      version: 'weekly',
    });

    if (loader && !map) {
      loader.load().then(() => {
        setMap(
          new google.maps.Map(document.getElementById('map') as HTMLElement, {
            center: { lat: -30.105931, lng: -51.328167 },
            zoom: 14,
            styles: [
              { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
              {
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#242f3e' }],
              },
              {
                elementType: 'labels.text.fill',
                stylers: [{ color: '#746855' }],
              },
              {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }],
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }],
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }],
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }],
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }],
              },
              {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }],
              },
              {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }],
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }],
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }],
              },
              {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }],
              },
              {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }],
              },
              {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }],
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }],
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }],
              },
              {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }],
              },
            ],
          })
        );
      });
    }
  }, []);

  const value = { map };

  return (
    <MapContext.Provider value={value}>
      <div id="map">{children}</div>
    </MapContext.Provider>
  );
}
