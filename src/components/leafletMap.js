import React from "react";
import { MapContainer } from "react-leaflet";
import L from "leaflet";
import MapDetails from "./mapDetails";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

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
