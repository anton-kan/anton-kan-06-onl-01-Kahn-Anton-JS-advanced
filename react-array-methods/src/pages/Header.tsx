import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Breadcrumbs from '../components/Breadcrumbs';
import ROUTING_PATHS from '../helpers/routing_paths';

const activeClassName = 'nav-item-active';

const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  font-size: 40px;
  font-family: 'Raleway';
  color: rgb(198, 196, 196);
  font-weight: bold;
  line-height: 1.2;
  &.${activeClassName} {
    color: rgb(143, 119, 119);
  }
`;

const Header = () => {
  return (
    <header className="App-header">
      <h1 className="App-header-title">Array Methods</h1>
      <nav className="App-header-menu">
        <ul>
          <li>
            <StyledNavLink to={ROUTING_PATHS.home} exact>
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={ROUTING_PATHS.game}>Game</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={ROUTING_PATHS.solution}>Solution</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={ROUTING_PATHS.reference}>Reference</StyledNavLink>
          </li>
        </ul>
      </nav>
      <Breadcrumbs />
    </header>
  );
};

export default Header;
