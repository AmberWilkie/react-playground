import React from 'react';

const Slider = (props) => {
  return (
    <input type="range" value={props.rotation}
           min='0' max='360'
           onChange={(event) => { props.setRotation(event.target.value); }}
    />
  )
}

export default Slider;
