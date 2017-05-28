import React, { Component } from 'react';
import './App.css';

class Input extends Component {
	state = { color: ''};
  
  	submitText = (e) => {
  	e.preventDefault();
  	console.log(this.state.color);
		this.props.addColor(this.state.color);
  	}
  render() {
  	return (
    	<form onSubmit={this.submitText}>
      	<input 
          type="text"
          placeholder="pick a color" 
          value={this.state.color}
          onChange={(event) => { this.setState({
          	color: event.target.value
          })}}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

const ColorBox = (props) => {
	// console.log('COLORBOX', props);
	return (
  	<div 
      style={{
      	background: props.color, 
        width: '50px', 
        height: '50px', 
        margin: '1em',
      display: 'inline-block'}}
    ></div>
  )
}

const BoxList = (props) => {
	// console.log('BOXLIST', props);
  return (
    <div>
      {props.colors.map(
        color => <ColorBox {...color} />
      )}
    </div>
  )
}

class App extends Component {
	state = {
  	data: []
  }  
  addColor = (color) => {
	  console.log('color: ', color);
	  console.log('before state change: ', this.state.data);
  	this.setState(prevState => ({
    	data: prevState.data.concat({color: color})
    }))
	  console.log('after state change: ', this.state.data);
  }
  render() {
  	return (
    	<div>
    	  <Input addColor={this.addColor} />
        <BoxList colors={this.state.data} />
      </div>
    );
  };

}

export default App;
