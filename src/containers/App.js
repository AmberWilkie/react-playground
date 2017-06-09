import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import '../App.css';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { history } from './../store/configureStore';

import Header from '../containers/Header';
import Home from '../components/Home';
import ColorBoxes from '../containers/ColorBoxes'
import Login from '../containers/login/login';

class App extends Component {
  render() {
    const {
      data,
      rotation
    } = this.props

    return (
      <ConnectedRouter history={history}>
        <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/colorboxes' component={ColorBoxes} colors={data} removeBox={this.props.actions.removeColor} rotation={rotation} setRotation={this.props.actions.setRotation}  />
        </div>
      </ConnectedRouter>
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
