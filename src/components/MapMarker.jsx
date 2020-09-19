import React from "react";
import { Marker } from "react-simple-maps";

const MapMarker = ({ coordinates, color }) => (
  <Marker coordinates={coordinates}>
    <g
      fill={color}
      stroke="none"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(-12, -24)"
    >
      <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
      <circle cx="12" cy="10" r="3" fill="#ffffff" />
    </g>
  </Marker>
);

export default MapMarker;
