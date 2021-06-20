import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import ROUTING_PATHS from './helpers/routing_paths';
import Home from './pages/Home';
import Game from './pages/Game';
import Solution from './pages/Solution';
import Reference from './pages/Reference';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-header-title">Array Methods</h1>
          <nav className="App-header-menu">
            <ul>
              <li>
                <NavLink to={ROUTING_PATHS.home}>Home</NavLink>
              </li>
              <li>
                <NavLink to={ROUTING_PATHS.game}>Game</NavLink>
              </li>
              <li>
                <NavLink to={ROUTING_PATHS.solution}>Solution</NavLink>
              </li>
              <li>
                <NavLink to={ROUTING_PATHS.reference}>Reference</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <div className="App-container">
            <Switch>
              <Route exact path={ROUTING_PATHS.home} component={Home} />
              <Route path={ROUTING_PATHS.game} component={Game} />
              <Route path={ROUTING_PATHS.solution} component={Solution} />
              <Route path={ROUTING_PATHS.reference} component={Reference} />
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
