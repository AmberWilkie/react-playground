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
  	data: []
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

  render() {
  	return (
    	<div>
    	  <Input addColor={this.addColor} />
        <BoxList colors={this.state.data} removeBox={this.removeColor} />
      </div>
    );
  };

}

export default App;
