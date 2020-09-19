import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

import { GEO_URL, MAP_FILL, MAP_STROKE } from "../constants";
import Markers from "../components/Markers";

const Map = ({ markers, categories }) => (
  <ComposableMap>
    <ZoomableGroup zoom={1}>
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill={MAP_FILL}
              stroke={MAP_STROKE}
            />
          ))
        }
      </Geographies>
      <Markers markers={markers} categories={categories} />
    </ZoomableGroup>
  </ComposableMap>
);

export default Map;
