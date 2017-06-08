import React from 'react';

const ColorBox = (props) => {
  return (
    <div style={{
      background: props.color, 
      width: '50px', 
      height: '50px', 
      margin: '1em',
      display: 'inline-block'}}
      onClick= {() => props.removeBox(props.color)}
    >
    </div>
  )
}

export default ColorBox;
