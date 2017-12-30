import React from 'react';

import {
  StoryInfo,
  Title,
  StyledLink,
  StoryURL,
  StoryMeta,
  StoryMetaItem
} from './style.js';

import {
  formatURL,
  formatDateTime
} from './../../lib/helpers';

const Story = (props) => {
  const {story} = props;  
  return(
    <StoryInfo>

      <Title>
        {story.url ? 
          <StyledLink target="_blank" rel="noopener" to={story.url}>
            {story.title}
          </StyledLink>
        : story.title}
      </Title>

      <StoryURL>
        ({formatURL(story.url)})
      </StoryURL>

      <StoryMeta>
        <StoryMetaItem>
          {story.score} points by <StyledLink to={`user/${story.by}`}>{story.by}</StyledLink>
        </StoryMetaItem>
        <StoryMetaItem>
          {formatDateTime(story.time)}
        </StoryMetaItem>
        <StoryMetaItem>
          {story.descendants ? story.descendants : '0'} comments
        </StoryMetaItem>
      </StoryMeta>

      {/* {story.score} by {story.by}
      {formatDateTime(story.time)}
      Comments ({story.descendants}) */}
    </StoryInfo>
  )
}

export default Story;