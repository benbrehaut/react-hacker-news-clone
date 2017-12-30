import React, { Component } from 'react';

import {Wrapper} from './style.js';

class Row extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    )
  }
}

export default Row;
