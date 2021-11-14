import { useEffect, useState } from "react";

function useUserLocate() {
  const [userPosition, setUserPosition] = useState<[number, number]>([0,0]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;
      setUserPosition([latitude, longitude]);
    });

  }, [userPosition]);
  return ({userPosition, setUserPosition});
}

export {
  useUserLocate
} ;