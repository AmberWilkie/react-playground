import React from 'react';
import Canvas from './Canvas';
import Slider from './Slider';
import ColorBox from './ColorBox';
import BoxList from './BoxList';
import Input from '../containers/input/input'


const LinkPage = (props) => {
  return (
    <div>
      <Input addColor={props.addColor} />
      <BoxList colors={props.colors} removeBox={props.removeBox} />
      <Slider rotation={props.rotation} setRotation={props.setRotation} />
      <br /><br />
      <Canvas colors={props.colors} rotation={props.rotation}/>
    </div>
  )
}

export default LinkPage;
