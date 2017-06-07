import React, { Component } from 'react';
import './App.css';
import Input from './input/input'
import Login from './login/login'

const Slider = (props) => {
  return (
    <input type="range" value={props.rotation}
    min='0' max='360'
    onChange={(event) => { 
      props.setRotation(event.target.value);
    }}
    />
  )
}

const Canvas = (props) => {
  const colors = props.colors.map( item => item.color)
  return (
    <div>
      <canvas id="canvas" width="500px" height="350px" style={{
        border: '1px solid #d3d3d3',
        backgroundImage: `linear-gradient(${props.rotation}deg, ${colors.join(', ')})`
      }}>
      Your browser does not support the HTML5 canvas tag.
      </canvas>
    </div>
  )
}

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

class BoxList extends Component {
  render() {
    return (
      <div>
      {this.props.colors.map(
        (color, i) => <ColorBox {...color} key={i} removeBox={this.props.removeBox} />
      )}
      </div>
    )
  }
}

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

class App extends Component {
  state = {
    data: [],
    rotation: '90'
  }

  addColor = (color) => {
    this.setState(prevState => ({
      data: prevState.data.concat({color: color})
    }))
  }

  removeColor = (color) => {
    this.setState(prevState => ({
      data: prevState.data.filter( (item) => {
        if(item.color !== color) {
          return item
        }
        return false;
      })
    }))
  }

  setRotation = (rotation) => {
    this.setState( () => ({
      rotation: rotation
    }))
  }

  render() {
    const {
      data,
      rotation
    } = this.state

    return (
      <div>
        <Login />
        <br /><br />
        <LinkPage addColor={this.addColor} 
                  colors={data} removeBox={this.removeColor}
                  rotation={rotation} setRotation={this.setRotation}
        />
      </div>
    );
  };
}

export default App;
