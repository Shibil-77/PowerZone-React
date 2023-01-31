import React from 'react';
import {Popup} from 'react-leaflet';
import MapModal from './MapModal';

const MarkerPopup = (props) => {
  const { name } = props.data;
  console.log(name);

  return  (<Popup>
    <div className='poup-text'>
      <MapModal/>
    </div>
  </Popup>);
};

export default MarkerPopup;
