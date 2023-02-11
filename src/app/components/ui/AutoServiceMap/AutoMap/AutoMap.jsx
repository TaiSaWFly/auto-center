import React from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { pin } from "../../../../mockData/defautlData";

const myIcon = L.icon({
  iconUrl: require(`/src/${pin}`),
  iconSize: [60, 60],
});

class AutoMap extends React.Component {
  render() {
    const position = [56.816, 60.524];
    const zoom = 14.72;

    return (
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />

        <Marker icon={myIcon} position={position}></Marker>
      </MapContainer>
    );
  }
}

export default AutoMap;
