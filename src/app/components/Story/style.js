import styled from 'styled-components';
import {Link} from 'react-router-dom';

const dimColor = '#969696';

// Card
export const StoryInfo = styled.section`
  background-color: white;
  border: 1px solid #d2d2d2;
  color: #2c2c2c;
  padding: 1rem;
  width: 100%;
  margin: 1rem 0;
`

export const StoryURL = styled.span`
  color: ${dimColor};
  font-size: 0.7rem;
  display: inline-block;
  margin-left: 0.5rem;
`

// CardTitle
export const Title = styled.h2`
  font-size: 1.2em;
  margin: 0;
  display: inline-block;

  a:visited {
    color: ${dimColor};
  }
`;

export const StoryMeta = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 0;
`

export const StoryMetaItem = styled.li`
  display: inline-block;
  font-size: 0.8rem;
  color: ${dimColor};

  &:not(:last-of-type):after {
    content: '\\007c';
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    font-size: 1rem;
    font-weight: 100;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`