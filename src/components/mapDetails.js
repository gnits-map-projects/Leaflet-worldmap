import { TileLayer, useMap } from "react-leaflet";

import { Fragment, useEffect } from "react";
import LocationMarker from "./locationMarkers";

const MapDetails = (props) => {
  const { markers, centerPosition } = props;
  const map = useMap();

  useEffect(() => {
    map.flyTo(centerPosition, map.getZoom());
  }, [centerPosition, map]);

  return (
    <Fragment>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((mark, index) => (
        <LocationMarker position={Object.values(mark)} key={index} />
      ))}
    </Fragment>
  );
};

export default MapDetails;
