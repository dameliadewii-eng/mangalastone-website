import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Company Logo
import logo from "@/assets/img/logo.png";

// ✅ FIX LEAFLET DEFAULT ICON ISSUE (IMPORTANT FOR VERCEL)
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const Map = () => {
  // ✅ COMPANY COORDINATES
  const position = [-6.777559, 108.395361];

  // ✅ CUSTOM MARKER ICON
  const customMarker = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [30, 45],
    iconAnchor: [15, 45],
    popupAnchor: [0, -40],
  });

  return (
    <div className="leaflet-map-container">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        dragging={true}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "12px",
        }}
      >
        {/* ✅ MAP TILE LAYER */}
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* ✅ LOCATION MARKER */}
        <Marker position={position} icon={customMarker}>
          <Popup>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "180px",
                padding: "5px",
                textAlign: "center",
              }}
            >
              <img
                src={logo}
                alt="Mangala Stone Logo"
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "contain",
                  marginBottom: "10px",
                  display: "block",
                }}
              />

              <h3
                style={{
                  margin: 0,
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#1a1a1a",
                }}
              >
                Mangala Stone Indonesia
              </h3>

              <p
                style={{
                  marginTop: "6px",
                  fontSize: "13px",
                  color: "#555",
                  lineHeight: "1.3",
                }}
              >
                Jalan Raya Imam Bonjol, Sindangwangi, Kabupaten Majalengka,
                West Java, Indonesia
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
