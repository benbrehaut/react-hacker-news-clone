import React, { Component } from 'react';
import api from './../../lib/api';

import Row from './../../components/Grid/Row';

import Article from './../../components/Article/Article';

export default class ArticlesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    }
  }

  findArticles() {
    const self = this;
    const endpoint = this.props.endpoint;

    api.get(`/${endpoint}.json`)
      .then(function (resp) {
        let data = resp.data.slice(0, 30);

        data.forEach(self.findArticle(data))
      })
      .catch(function (err) {
        console.warn(err)
      })
  }

  findArticle(article) {
    const self = this;
    article.forEach(function (item) {
      api.get(`/item/${item}.json`)
        .then(function (resp) {
          self.setState({
            articles: self.state.articles.concat(resp.data)
          })
        })
        .catch(function (err) {
          console.warn(err)
        })
    })
  }

  componentDidMount() {
    this.findArticles();
  }

  render() {
    return (
      <Row>
        {this.state.articles.map((article, id) => {
          return <Article key={id} index={id + 1} article={article} />
        })}
      </Row>
    )
  }
}