import React, { Component } from 'react';

import Row from './../../components/Grid/Row';

export default class Error404Container extends Component {
  render() {
    const location = this.props;
    return (
      <Row>
        Error: No path for {location.pathname}
      </Row>
    )
  }
}