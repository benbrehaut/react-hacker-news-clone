import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const brandColor = '#ff8434';
const accentColor = '#fff';

// HeaderBar
export const Header = styled.header`
  background-color: ${brandColor};
  color: ${accentColor};
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`

// Title
export const Title = styled.h1`
  font-size: 1.5em;
  margin: 0;
`;

export const Nav = styled.nav`
  margin-left: 4rem;
`

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
`

export const NavListItem = styled.li`
  padding: 0;
  display: inline-block;
  margin-left: 1rem;
  margin-right: 1rem;
`

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${accentColor};

  &:hover {
    text-decoration: underline;
  }
`