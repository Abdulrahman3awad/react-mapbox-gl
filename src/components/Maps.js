import React from 'react';
import ReactMapboxGl, { Feature, Layer, Marker, ZoomControl } from 'react-mapbox-gl';

const Map = () => {
  const Mapbox = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiM2JkbzN3YWQiLCJhIjoiY2x1aGo2N3ltMmp2czJqbmljNnNkcnNqdCJ9.YfTV9in8qYK7tRiyxtYDyQ'
  });

  return (
    <Mapbox
      style="mapbox://styles/mapbox/satellite-v9"
      containerStyle={{
        height: '100vh',
        width: '100%'
      }}
      center={[31.2357, 30.0444]} // Centered at Cairo
      zoom={[5]} // Adjust zoom level as needed
    >
        {/* Custom Layer */}
      <Layer
        type="circle"
        id="marker"
        paint={{
          'circle-radius': 10,
          'circle-color': '#007cbf'
        }}
      >
        <Feature coordinates={[31.2357, 30.0444]} />
      </Layer>
      <Marker coordinates={[31.2357, 30.0444]} />
      <ZoomControl position="top-left"/>

    </Mapbox>
  );
};

export default Map;

