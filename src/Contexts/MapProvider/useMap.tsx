import { useContext } from 'react';
import { MapContext } from './index';

export function useMap() {
  const context = useContext(MapContext);
  return context;
}
