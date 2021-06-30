import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ROUTING_PATHS from '../helpers/routing_paths';
import Home from './Home';
import Game from './Game';
import Solution from './Solution';
import Method from './Method';
import Reference from './Reference';
import ErrorPage from './ErrorPage';

const Main = () => {
  return (
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
  );
};

export default Main;
