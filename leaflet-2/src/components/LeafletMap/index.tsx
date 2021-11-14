import { MapContainer, TileLayer } from 'react-leaflet';
import UserMarker from '../Markers';
import { SelectCountry } from '../SelectCountry';

const zoom: number = 3;

const LeafletMap: React.FC = () => {
  return (
    <MapContainer center={[0, 0]} zoom={ zoom } scrollWheelZoom={true} whenCreated={(map) => { map.locate()}}>
      <UserMarker />
      <SelectCountry />
      <TileLayer
      attribution='&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png" />
    </MapContainer>
  )
} 

export default LeafletMap;
