import React from "react";
import { COLORS } from "../constants";
import MapMarker from "./MapMarker";

const Markers = ({ markers, categories }) => {
  const markerColor = (categories, category) =>
    COLORS[categories.indexOf(category)];

  return markers.map(({ name, coordinates, category }) => (
    <MapMarker
      key={name}
      coordinates={coordinates}
      color={markerColor(categories, category)}
    />
  ));
};

export default Markers;
