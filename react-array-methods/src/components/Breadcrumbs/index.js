import React from 'react';
import styled from 'styled-components';
import { useLocation, NavLink } from 'react-router-dom';

const StyledUL = styled.ul`
  list-style: none;
  display: flex;
`;

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const crumbs = pathname.split('/').filter((i) => i);

  return (
    <StyledUL>
      <NavLink to="/">Home</NavLink>
      {crumbs.map((i, index) => (
        <li key={i}>
          <NavLink to={`/${crumbs.slice(0, index + 1).join('/')}`}>&nbsp;{`> ${i}`}</NavLink>
        </li>
      ))}
    </StyledUL>
  );
};

export default Breadcrumbs;
