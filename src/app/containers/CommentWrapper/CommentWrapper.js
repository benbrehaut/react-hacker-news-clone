import React, { Component } from 'react';
import api from './../../lib/api';

export default class CommentWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.comments !== this.props.comments) {
      this.setState({ comments: nextProps.comments });  
    }
  }

  findComments(props) {
    const self = this;
    const comments = this.state.comments;

    comments.forEach(function (comment) {
      api.get(`/item/${comment}.json`)
        .then(function (resp) {
          console.log(resp.data)
          self.setState({
            comments: self.state.comments.concat(resp.data)
          })
        })
        .catch(function (err) {
          console.warn(err)
        })
    })
  }

  componentDidMount() {
    this.findComments();
  }

  render() {
    return (
      <div>
        {console.log(this.state.comments)}
      </div>
    )
  }
}