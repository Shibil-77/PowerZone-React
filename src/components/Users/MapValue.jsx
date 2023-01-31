import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import React,{useState} from 'react'
import {VenueLocationIcon} from './VenueLocationIcon';

function MapValue() {
    const [latitude, setLatitude] = useState(5.6);
    const [longitude, setLongitude] = useState(7.8);
    const [zoom, setZoom] = useState(13);
    const [view,setView] = useState(false)
    return (
      <>
      <button onClick={(e)=>{
           e.preventDefault();
           setView(true)
      }} className='bg-red-700'>Hello</button>
      <button className='mx-11 bg-green-500' onClick={(e)=>{
           e.preventDefault();
           setView(false)
      }}>Hai </button>

      <MapContainer center={[latitude, longitude]} zoom={zoom}   
      whenReady={(map) => {
        console.log(map);
        map.target.on("click", function (e) {

          const { lat, lng } = e.latlng;
          setLatitude(lat)
          setLongitude(lng)
        //    console.log(latitude);
        //   console.log(longitude);
        });
      }}>

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
          {view ?  <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        /> : <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
         />}
        

        <Marker position={[latitude, longitude]} icon={VenueLocationIcon}>
          <Popup>
            Latitude: {latitude} <br />
            Longitude: {longitude}
          </Popup>
        </Marker>
      </MapContainer>
      </>
    );
    
}

export default MapValue