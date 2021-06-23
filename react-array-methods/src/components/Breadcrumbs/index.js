import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import StyledNavLink from './StyledNavLink';

const StyledUL = styled.ul`
  list-style: none;
  display: flex;
`;

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const crumbs = pathname.split('/').filter((i) => i);

  return (
    <StyledUL>
      <StyledNavLink to="/">home</StyledNavLink>
      {crumbs.map((i, index) => (
        <li key={i}>
          <StyledNavLink to={`/${crumbs.slice(0, index + 1).join('/')}`}>&nbsp;{`> ${i}`}</StyledNavLink>
        </li>
      ))}
    </StyledUL>
  );
};

export default Breadcrumbs;
