import { Marker } from "leaflet";
import React, { useState } from "react";

export const LayerContext: any = React.createContext({});

export const LayerContextProvider = ({ children }: any) => {
  const [point, setPoint] = useState<Marker>();
  
  const defaultValue = {
    point,
    setPoint
  }
  return (
    <LayerContext.Provider value={defaultValue}>
      {children}
    </LayerContext.Provider>
  )
}
