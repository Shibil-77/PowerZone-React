import React from 'react';
import {Popup} from 'react-leaflet';
import MapModal from './MapModal';

const MarkerPopup = (props) => {
  const data = props.data;
  console.log(data,"==================================");
  return  (<Popup>
    <div className='poup-text'>

      <MapModal mapValue={data}/>
    </div>
  </Popup>);
};

export default MarkerPopup;
