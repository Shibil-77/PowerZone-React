import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useLocation, useNavigate } from 'react-router-dom';

import React, { useState } from 'react'
import { VenueLocationIcon } from './VenueLocationIcon';
import { addPointValueApi } from '../../api/portApi'


function MapValue() {
  const [latitude, setLatitude] = useState(11.151974290747289);
  const [longitude, setLongitude] = useState(75.89381330188164);
  const [zoom, setZoom] = useState(13);
  const [view, setView] = useState(true)
  const navigate = useNavigate()

  const location = useLocation()
  console.log(location.hash, "location hash");

  // const [data, setData] = useState([]);
  const AddPointValue = async(e) => {
    e.preventDefault()
    const pointValue = [latitude, longitude]
    const  mapValueData =await addPointValueApi(pointValue, location.hash)
    console.log(mapValueData,"=====---------------===============--------------==========------------=====");
    if (mapValueData.status === 200) {
       console.log("========4===========");
      navigate('/')
    } else {
      alert(mapValueData.data.message)
    }
  }
  return (
    <>
      <div className='grid grid-flow-col'>
        <button onClick={(e) => {
          e.preventDefault();
          setView(true)
        }} className="bg-green-600 text-white active:bg-green-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150  " type="button">
          Normal
        </button>
        <button onClick={(e) => {
          e.preventDefault();
          setView(false)
        }} className="bg-green-600 text-white active:bg-green-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150  " type="button">
          satellite
        </button>
        <div className='flex justify-end'>
          <button className="bg-green-600 text-white active:bg-green-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 max-w-xs " onClick={AddPointValue} type="button">
            ADD POINT
          </button>
        </div>
      </div>
      <MapContainer center={[latitude, longitude]} zoom={zoom}
        whenReady={(map) => {
          console.log(map);
          map.target.on("click", function (e) {
            const { lat, lng } = e.latlng;
            setLatitude(lat)
            setLongitude(lng)
          });
        }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {view ? <TileLayer
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