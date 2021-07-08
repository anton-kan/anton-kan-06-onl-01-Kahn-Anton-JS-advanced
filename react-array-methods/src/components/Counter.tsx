import styled from 'styled-components';

import { useSelector } from 'react-redux';
import IState from '../interfaces/IState';
import ICounter from '../interfaces/ICounter';

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const BorderedDiv = styled.div`
  border: 1px black solid;
  border-radius: 5px;
  padding: 5px;
`;

const StyledH3 = styled.h3`
  margin: 0;
`;

const Counter = () => {
  const counterState = useSelector<IState, ICounter>((state) => state.counter);
  return (
    <FlexDiv>
      <BorderedDiv>
        <StyledH3>Clicks</StyledH3>
        <div>
          Total: {counterState.total} Right: {counterState.right} Wrong: {counterState.wrong}
        </div>
      </BorderedDiv>
    </FlexDiv>
  );
};

export default Counter;
