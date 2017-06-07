import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    password: '',
    loggedIn: false,
  }

  submitLogin = (e) => {
    e.preventDefault();
    console.log(this.state);
    
    fetch('https://staging-subster-api.herokuapp.com/sessions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
      .then((resp) => {
        const token = resp.headers.get('X-Auth-Token')
        console.log(token);
        if(token) {
          this.setState({
            loggedIn: true
          })
        }
      })
  }

  setEmail = (value) => {
    this.setState((prevState) => ({
      email: value
    }))
  }

  setPassword = (value) => {
    this.setState((prevState) => ({
      password: value
    }))
  }

  render() {
    return (
      <form onSubmit={this.submitLogin}>
        <input 
          type="text"
          autoFocus="true"
          placeholder="email" 
          value={this.state.email}
          onChange={ (event) => { this.setEmail(event.target.value.trim()) } }

        />
        <input 
          type="text"
          placeholder="password" 
          value={this.state.password}
          onChange={ (event) => { this.setPassword(event.target.value.trim()) } }
        />
        <button type="submit">Submit Login</button>
        {this.state.loggedIn &&
        <div>Hooray, you logged in!</div>
        }
      </form>
    )
  }
}

export default Login;
