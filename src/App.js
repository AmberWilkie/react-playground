import React, { Component } from 'react';
import './App.css';

class Input extends Component {
	state = { color: ''};
  
  submitText = (e) => {
    e.preventDefault();
    this.props.addColor(this.state.color);
    this.state.color = '';
  }
  render() {
  	return (
    	<form onSubmit={this.submitText}>
      	<input 
          type="text"
          autoFocus="true"
          placeholder="pick a color" 
          value={this.state.color}
          onChange={(event) => { this.setState({
          	color: event.target.value
          })}}
        />
        <input type="color"
           onChange={(event) => { this.setState({
          	color: event.target.value
          })}}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

class ColorPicker extends Component {
	state = { color: ''};
  
  submitColor = (e) => {
    e.preventDefault();
    this.props.addColor(this.state.color);
    this.state.color = '';
  }
  render() {
  	return (
    	<form onSubmit={this.submitColor}>
        <input type="color"
           onChange={(event) => { this.setState({
          	color: event.target.value
          })}}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}


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
    	  <ColorPicker addColor={this.addColor} />
        <BoxList colors={data} removeBox={this.removeColor} />
        <Slider rotation={rotation} setRotation={this.setRotation} />
        <br /><br />
        <Canvas colors={data} rotation={rotation}/>
      </div>
    );
  };

}

export default App;
