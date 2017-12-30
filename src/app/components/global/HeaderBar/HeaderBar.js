import React from 'react';

import {
  Title, 
  Header, 
  Nav, 
  NavList,
  NavListItem,
  StyledLink
} from './style.js'

const HeaderBar = () => {
  return(
    <Header>
      <Title>
        <StyledLink to="/">McHacker News</StyledLink>
      </Title>

      <Nav>
        <NavList>
          <NavListItem>
            <StyledLink to="/new">New</StyledLink>
          </NavListItem>
          <NavListItem>
            <StyledLink to="/best-stories">Best Stories</StyledLink>
          </NavListItem>
        </NavList>
      </Nav>
    </Header>
  )
}

export default HeaderBar;