import React from 'react';

import StoryContainer from './../../containers/StoryContainer/StoryContainer';

const Story = (props) => {
  return <StoryContainer story={props.match.params.id} />
}

export default Story;