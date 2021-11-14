import { point } from 'leaflet';
import { LayerGroup, MapContainer, TileLayer } from 'react-leaflet';
import { useUserLocate } from '../customHooks';
import Markers from '../Markers';

const zoom: number = 10;

const LeafletMap: React.FC = () => {
  const {userPosition } = useUserLocate();
  return (
    <MapContainer center={ userPosition } zoom={ zoom } scrollWheelZoom={true} >
      <Markers />
      <LayerGroup>
        {point}
      </LayerGroup>
      <TileLayer
      attribution='&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png" />
    </MapContainer>
  )
} 

export default LeafletMap;
