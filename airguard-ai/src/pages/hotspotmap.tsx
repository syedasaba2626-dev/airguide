import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

const demoStations = [
  {
    name: "Demo Station A",
    position: [17.385, 78.4867] as [number, number],
    note: "Demo marker only. Not a real monitoring station.",
  },
  {
    name: "Demo Station B",
    position: [17.415, 78.448] as [number, number],
    note: "Demo marker only. Not a real monitoring station.",
  },
];

export default function HotspotMap() {
  return (
    <div style={{ height: "420px", width: "100%" }}>
      <MapContainer
        center={[17.385, 78.4867]}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {demoStations.map((station) => (
          <CircleMarker
            key={station.name}
            center={station.position}
            radius={8}
          >
            <Popup>
              <strong>{station.name}</strong>
              <p>{station.note}</p>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}