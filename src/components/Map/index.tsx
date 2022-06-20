import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import personMarker from '../../assets/icons/personMarker.svg';

export function Map() {
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_API_KEY || '',
      version: 'weekly',
    });

    loader.load().then(() => {
      const map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
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
        }
      );

      map.addListener('click', (e: google.maps.MapMouseEvent) => {
        console.log(e.latLng?.toJSON());
      });

      const marker = new google.maps.Marker({
        position: {
          lat: -30.10683686993549,
          lng: -51.329162639129535,
        },
        map,
        icon: personMarker,
        title: 'test',
      });

      const contentString =
        '<div class="info">' +
        '<span>Centro de doações</span>' +
        '<button type="button">Detalhes</button>' +
        '</div>';

      const infowindow = new google.maps.InfoWindow({
        content: contentString,
      });

      marker.addListener('click', () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });
    });
  }, []);

  return <div id="map"></div>;
}
