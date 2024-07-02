import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../Pin/Pin";

export default function Map({ items }) {
  return (
    <>
      <MapContainer
        center={[52.4797, -1.90269]}
        className="map"
        zoom={7}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map((item) => (
          <Pin item={item} key={item.id} />
        ))}
      </MapContainer>
    </>
  );
}
