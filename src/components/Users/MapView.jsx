import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import data from '../../assets/data.json';
import Markers from './VenueMarkers';
import { mapDataApi } from '../../api/portApi'

function MapView() {
  const currentLocation = { lat: 52.52437, lng: 13.41053 }
  const [mapData, setMapData] = useState([])
  useEffect(() => {
    const apiCall = async () => {
      const data = await mapDataApi()
      console.log("data:======",data);
      setMapData(data)
      console.log(mapData,"================");
    }
    apiCall()
  }, [])

  return (
    mapData.length &&
    <MapContainer center={currentLocation} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />

      <Markers venues={mapData} />
    </MapContainer>
  )
}


export default MapView;
