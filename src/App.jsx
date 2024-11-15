import React, { useState, useEffect } from "react";
import { MapContainer, GeoJSON, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { fetchCountryGeoJson } from "./service/geojsonService";
import ColorPicker from "./components/ColorPicker";
import CustomIcon from "./components/CustomIcon";

function Map() {
  const [countryColor, setCountryColor] = useState("#e3dece");
  const [markerColor, setMarkerColor] = useState("#f29170");
  const [geoJsonData, setGeoJsonData] = useState(null);

  // Cargar datos GeoJSON
  const loadGeoJsonData = async () => {
    try {
      const data = await fetchCountryGeoJson("ITA"); // Código ISO de Italia
      setGeoJsonData(data);
    } catch (error) {
      console.error("Error al cargar los datos del país:", error);
    }
  };

  // Estilo para el país
  const mapStyle = {
    fillColor: countryColor,
    color: countryColor,
    weight: 1,
    fillOpacity: 1,
  };

  useEffect(() => {
    loadGeoJsonData();
  }, []);

  return (
    <div className="map-container">
      <div className="map-wrapper">
        <MapContainer
          className="map"
          center={[41.902782, 12.496366]} // Coordenadas de Roma
          zoom={5}
          zoomControl={false}
          dragging={false}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          touchZoom={false}
          attributionControl={false}
        >
          {geoJsonData && <GeoJSON data={geoJsonData} style={() => mapStyle} />}
          <Marker
            position={[41.902782, 12.496366]}
            icon={CustomIcon({ color: markerColor })}
          />
        </MapContainer>
      </div>
      <div className="controls">
        <ColorPicker
          label="Color del país"
          value={countryColor}
          onChange={(e) => setCountryColor(e.target.value)}
        />
        <ColorPicker
          label="Color del marcador"
          value={markerColor}
          onChange={(e) => setMarkerColor(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Map;
