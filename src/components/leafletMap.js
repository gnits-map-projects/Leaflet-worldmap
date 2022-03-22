import React from "react";
import { MapContainer } from "react-leaflet";
import MapDetails from "./mapDetails";

const LeafletMap = (props) => {
  const { markers, setMarker, centerPosition } = props;
  const handleClick = (e) => {
    e.preventDefault();
    setMarker({
      latitude: e.latlng.lat,
      longitude: e.latlng.lng,
    });
  };

  return (
    <MapContainer
      center={centerPosition}
      zoom={13}
      style={{ height: "800px", width: "100%" }}
      onClick={handleClick}
    >
      <MapDetails markers={markers} centerPosition={centerPosition} />
    </MapContainer>
  );
};

export default LeafletMap;
