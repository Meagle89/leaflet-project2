import { Marker, useMapEvents, Popup } from "react-leaflet";
import { useUserLocate } from "../customHooks"

const UserMarker = () => {
  const {userPosition, setUserPosition} = useUserLocate();

  const map = useMapEvents({
    locationfound: (location) => {
      const {lat, lng} = location.latlng;
      map.flyTo(location.latlng, 13);
      setUserPosition([lat, lng]);
    },
    locationerror: (e) => {
      console.log("location not found");
    },
  });

  return (
    userPosition ? 
      <Marker
      key={userPosition[0]}
      position={userPosition}
      >
        <Popup>
          You are here.
        </Popup> 
      </Marker> : null
  )
}

export default UserMarker;