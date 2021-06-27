import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import StyledNavLink from './StyledNavLink';
import StyledNavSpan from './StyledNavSpan';

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
          {index < crumbs.length - 1 ? (
            <StyledNavLink to={`/${crumbs.slice(0, index + 1).join('/')}`}>&nbsp;{`> ${i}`}</StyledNavLink>
          ) : (
            <StyledNavSpan>&nbsp;{`> ${i}`}</StyledNavSpan>
          )}
        </li>
      ))}
    </StyledUL>
  );
};

export default Breadcrumbs;
