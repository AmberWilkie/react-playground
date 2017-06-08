import React from 'react';
import ColorBox from './ColorBox';

const BoxList = (props) => {
  return (
    <div>
    {props.colors.map(
      (color, i) => <ColorBox color={color} key={i} removeBox={props.removeBox} />
    )}
    </div>
  )
}

export default BoxList;
