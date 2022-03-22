import { useState } from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";

const LocationMarker = (props) => {
  const [position, setPosition] = useState(props.position);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });
  

  return (
    <Marker position={position}>
      <Popup>
        Latitude: {position[0]}
        <br />
        Longitude: {position[1]}
      </Popup>
    </Marker>
  );
};

export default LocationMarker;
