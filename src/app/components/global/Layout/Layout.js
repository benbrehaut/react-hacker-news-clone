import React, { Component } from 'react';
import HeaderBar from './../HeaderBar/HeaderBar';

export default class Layout extends Component {
  render() {
    return (
      <div className="app">
        <HeaderBar />

        <main className="app-content">
          { this.props.children }
        </main>
      </div>
    );
  }
}