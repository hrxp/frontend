import React, { Component } from 'react';

import SideMenu from './sidemenu';
import App from './App';



export default class Container extends Component {
  render() {

    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'row', alignItems: 'top' }}>
        <SideMenu />
        <App />
      </div>
    );
  }
}