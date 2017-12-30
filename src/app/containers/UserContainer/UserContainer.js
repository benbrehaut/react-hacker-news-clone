import React, { Component } from 'react';
import api from './../../lib/api';

import Row from './../../components/Grid/Row';
import User from './../../components/User/User';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    }
  }

  findUser() {
    const self = this;
    const username = this.props.username;

    api.get(`/user/${username}.json`)
      .then(function (resp) {
        console.log(resp.data)
        self.setState({
          user: resp.data
        })
      })
      .catch(function (err) {
        console.warn(err)
      })
  }

  componentDidMount() {
    this.findUser();
  }

  render() {
    return (
      <Row>
        <User user={this.state.user} />
      </Row>
    )
  }
}