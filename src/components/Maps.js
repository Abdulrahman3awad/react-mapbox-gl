import React from "react";
import Map, { Marker } from "react-map-gl";

function Maps(props) {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoiM2JkbzN3YWQiLCJhIjoiY2x1aGV0OXBjMm9pNjJrcXV5bTNxa3AzeiJ9.XIMT6_4aR3jy_cBDjss6xA"
      mapLib={import("mapbox-gl")}
      initialViewState={{
        longitude:props.longitude ,
        latitude: props.latitude,
        zoom:props.zoom,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {props.markers.map((m,index)=>(
      <Marker
        key={index}
        longitude={m.longitude}
        latitude={m.latitude}
        offsetLeft={-20}
        offsetTop={-10}
      >
      <img src="787535.png" style={{width:"30px"}} /> 
      </Marker>

      ))}
    </Map>
  );
}
export default Maps;
