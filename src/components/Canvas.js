import React from 'react';

const Canvas = (props) => {
  return (
    <div>
      <canvas id="canvas" width="500px" height="350px" style={{
        border: '1px solid #d3d3d3',
        backgroundImage: `linear-gradient(${props.rotation}deg, ${props.colors.join(', ')})`
      }}>
      Your browser does not support the HTML5 canvas tag.
      </canvas>
    </div>
  )
}

export default Canvas;
