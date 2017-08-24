import React from 'react';
import LoadingBar from 'react-redux-loading-bar'

import logo from './logo.svg';
import './style.css';

class Header extends React.Component {
  render() {
    return (
      <div className="App-header">
        <LoadingBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React Template</h2>
      </div>
    );
  }
}

export default Header;
