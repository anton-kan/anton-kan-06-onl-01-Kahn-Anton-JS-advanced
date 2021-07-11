import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import ROUTING_PATHS from '../helpers/routing_paths';
import Home from './Home';
import Game from './Game';
import Solution from './Solution';
import Method from './Method';
import Reference from './Reference';
import ErrorPage from './ErrorPage';

const StyledMain = styled.main`
  flex-grow: 1;
`;

const Main = () => {
  return (
    <StyledMain>
      <div className="App-container">
        <Switch>
          <Route path={ROUTING_PATHS.prodStartingPoint}>
            <Redirect to={ROUTING_PATHS.home} />
          </Route>
          <Route exact path={ROUTING_PATHS.home} component={Home} />
          <Route path={ROUTING_PATHS.game} component={Game} />
          <Route path={ROUTING_PATHS.solution} component={Solution} />
          <Route path={ROUTING_PATHS.method} component={Method} />
          <Route path={ROUTING_PATHS.reference} component={Reference} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </div>
    </StyledMain>
  );
};

export default Main;
