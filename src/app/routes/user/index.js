import React from 'react';

import UserContainer from './../../containers/UserContainer/UserContainer';

const User = (props) => {
  return <UserContainer username={props.match.params.username} />
}

export default User;