import React from 'react';

import {
  ArticleContainer, 
  ArticleTitle,
  ArticleURL,
  ArticleMeta,
  ArticleMetaItem,
  StyledLink
} from './style.js';

import {
  formatURL,
  formatDateTime,
  arrayCount
} from './../../lib/helpers';

const Article = (props) => {
  const {article, index} = props;  
  return(
    <ArticleContainer id={article.id} key={article.id}>
      <ArticleTitle>
        {article.url ? 
          <StyledLink target="_blank" rel="noopener" to={article.url}>
            {index}. {article.title}
          </StyledLink>
        : `${index}. ${article.title}` }
      </ArticleTitle> 
      {article.url && 
        <ArticleURL>
          ({formatURL(article.url)})
        </ArticleURL>
      }
      <ArticleMeta>
        <ArticleMetaItem>
          {article.score} points by <StyledLink to={`user/${article.by}`}>{article.by}</StyledLink>
        </ArticleMetaItem>
        <ArticleMetaItem>
          {formatDateTime(article.time)}
        </ArticleMetaItem>
        <ArticleMetaItem>
          <StyledLink to={`/story/${article.id}`}>
            {arrayCount(article.kids)} comments
          </StyledLink>
        </ArticleMetaItem>
      </ArticleMeta>
    </ArticleContainer>
  )
}

export default Article;