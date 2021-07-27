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
  topScores.sort((a: IScore, b: IScore) => a.time - b.time);

  const rows = topScores.map((score: IScore, index: number) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{score.name}</td>
      <td>{score.time}s</td>
      <td>{score.total}</td>
      <td>{score.right}</td>
      <td>{score.wrong}</td>
    </tr>
  ));

  return (
    <section>
      <h2>Top Scores ordered by time</h2>
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
    </section>
  );
};

export default TopScores;
