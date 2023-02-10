import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './VenueMarkers';
import { mapDataApi } from '../../../api/portApi'

function MapView() {
  const currentLocation = { lat:  9.221001595129604, lng:77.32796920716841 }
  const [mapData, setMapData] = useState([])
  useEffect(() => {
    const apiCall = async () => {
      const data = await mapDataApi()
      setMapData(data)
    }
    apiCall()
  }, [])

  return (
    mapData.length &&
    <MapContainer center={currentLocation} zoom={5}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Markers venues={mapData} />
    </MapContainer>
  )
}


export default MapView;
