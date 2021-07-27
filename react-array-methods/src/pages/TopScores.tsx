import styled from 'styled-components';

import { loadTopScores } from '../controller/top-scores-storage';
import { IScore } from '../interfaces/IScore';

const StyledTable = styled.table`
  border: 1px solid black;
  width: 100%;
  margin-top: 10px;
`;

const TopScores = () => {
  const topScores = loadTopScores();

  const rows = topScores.map((score: IScore, index: number) => (
    <tr>
      <td>{index + 1}</td>
      <td>{score.name}</td>
      <td>{score.time}</td>
      <td>{score.total}</td>
      <td>{score.right}</td>
      <td>{score.wrong}</td>
    </tr>
  ));

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Time</th>
          <th>Total</th>
          <th>Right</th>
          <th>Wrong</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </StyledTable>
  );
};

export default TopScores;
