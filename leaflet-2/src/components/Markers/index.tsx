import { Popup } from "react-leaflet";
import { Marker, useMapEvents } from "react-leaflet";
import { useUserLocate } from "../customHooks"

const Markers = () => {
  const {userPosition, setUserPosition} = useUserLocate();

  const map = useMapEvents({
    load(e) {
      map.locate();
    },
    locationfound(e) {
      const {lat, lng} = e.latlng;
      setUserPosition([lat, lng]);
      map.flyTo(e.latlng, map.getZoom());
    }
  });

  return(
    userPosition ? 
      <Marker
      key={userPosition[0]}
      position={userPosition}
      interactive={false}
      >
        <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
        </Popup> 
      </Marker> : null
  )
}

export default Markers;