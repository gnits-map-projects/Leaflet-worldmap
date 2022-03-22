import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "leaflet/dist/leaflet.css";

import LeafletMap from "./components/leafletMap";
import Header from "./components/headers";

const App = () => {
  const [markers, setMarkers] = useState([
    {
      latitude: 17.440081,
      longitude: 78.348915,
    },
  ]);
  const [center, setCenter] = useState([17.440081, 78.348915]);

  const setMarker = ({ latitude, longitude }) => {
    setMarkers([
      ...markers,
      {
        latitude,
        longitude,
      },
    ]);
    setCenter([latitude, longitude]);
  };

  return (
    <div className="App" style={{ textAlign: "left" }}>
      <Header setMarker={setMarker} />
      <LeafletMap
        markers={markers}
        setMarker={setMarker}
        centerPosition={center}
      />
    </div>
  );
};

export default App;
