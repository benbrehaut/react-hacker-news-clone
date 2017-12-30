import React, { Component } from 'react';
import api from './../../lib/api';

import Row from './../../components/Grid/Row';

import Story from './../../components/Story/Story';
import CommentWrapper from './../../containers/CommentWrapper/CommentWrapper';

export default class StoryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      story: [],
    }
  }

  findStory() {
    const self = this;
    const story = this.props.story;

    api.get(`/item/${story}.json`)
      .then(function (resp) {
        console.log(resp.data)
        self.setState({
          story: resp.data
        })
      })
      .catch(function (err) {
        console.warn(err)
      })
  }

  componentDidMount() {
    this.findStory();
  }

  render() {
    return (
      <Row>
        <Story story={this.state.story} />
        <CommentWrapper comments={this.state.story.kids} />
      </Row>
    )
  }
}