import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import '../App.css';
import Input from '../containers/input/input'
import Login from '../containers/login/login'
import Canvas from '../components/Canvas';
import Slider from '../components/Slider';
import BoxList from '../components/BoxList';

class App extends Component {
  render() {
    const {
      data,
      rotation
    } = this.props

    return (
      <div>
        <Login />
        <br /><br />
        <Input addColor={this.props.actions.addColor} />
        <BoxList colors={data} removeBox={this.props.actions.removeColor} />
        <Slider rotation={rotation} setRotation={this.props.actions.setRotation} />
        <br /><br />
        <Canvas colors={data} rotation={rotation}/>
        </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    data: state.colors.data,
    rotation: state.colors.rotation
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
