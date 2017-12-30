import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import {
  UserProfile,
  Title,
  Row
} from './style.js';

import {
  formatDateTime,
  arrayCount
} from './../../lib/helpers';

const User = (props) => {
  const {user} = props;  
  return(
    <UserProfile>
      <Row>
        <Title>Username:</Title> {user.id}
      </Row>
      {user.about && 
        <Row>
          <Title>About:</Title> {ReactHtmlParser(user.about)}
        </Row>
      }
      <Row>
        <Title>Created:</Title> {formatDateTime(user.created)}
      </Row>
      <Row>
        <Title>Karma:</Title> {user.karma}
      </Row>
      <Row>
        <Title>View Comments ({arrayCount(user.submitted)})</Title>
      </Row>
    </UserProfile>
  )
}

export default User;