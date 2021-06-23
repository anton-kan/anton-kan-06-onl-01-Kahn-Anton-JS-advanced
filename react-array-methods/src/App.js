import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import ROUTING_PATHS from './helpers/routing_paths';
import Home from './pages/Home';
import Game from './pages/Game';
import Solution from './pages/Solution';
import Method from './pages/Method';
import Reference from './pages/Reference';
import ErrorPage from './pages/ErrorPage';
import Breadcrumbs from './components/Breadcrumbs';
import styled from 'styled-components';

import './App.css';

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

const App = () => {
  return (
    <Router>
      <div className="App">
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
        <main>
          <div className="App-container">
            <Switch>
              <Route exact path={ROUTING_PATHS.home} component={Home} />
              <Route path={ROUTING_PATHS.game} component={Game} />
              <Route path={ROUTING_PATHS.solution} component={Solution} />
              <Route path={ROUTING_PATHS.method} component={Method} />
              <Route path={ROUTING_PATHS.reference} component={Reference} />
              <Route path="*" component={ErrorPage} />
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
