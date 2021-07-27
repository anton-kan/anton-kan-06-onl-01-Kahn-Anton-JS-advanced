import styled from 'styled-components';

import { useSelector } from 'react-redux';
import IState from '../interfaces/IState';
import ICounter from '../interfaces/ICounter';
import ITimer from '../interfaces/ITimer';

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

const RightSpan = styled.span`
  color: green;
`;

const WrongSpan = styled.span`
  color: red;
`;

const Counter = () => {
  const counterState = useSelector<IState, ICounter>((state) => state.counter);
  const timerState = useSelector<IState, ITimer>((state) => state.timer);
  return (
    <FlexDiv>
      <BorderedDiv>
        <StyledH3>Time Elapsed: </StyledH3>
        <div>{timerState.value}s</div>

        <StyledH3>Clicks</StyledH3>
        <div>
          Total: {counterState.total} <RightSpan>Right: {counterState.right}</RightSpan>{' '}
          <WrongSpan>Wrong: {counterState.wrong}</WrongSpan>
        </div>
      </BorderedDiv>
    </FlexDiv>
  );
};

export default Counter;
