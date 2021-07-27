import { IScore } from '../interfaces/IScore';

const TOP_SCORES_STORAGE_KEY = 'top-scores';

const saveTopScores = (topScores: IScore[]) => {
  localStorage.setItem(TOP_SCORES_STORAGE_KEY, JSON.stringify(topScores));
};

export const loadTopScores = () => {
  const topScores = localStorage.getItem(TOP_SCORES_STORAGE_KEY);
  return topScores ? JSON.parse(topScores) : [];
};

export const addTopScore = (score: IScore) => {
  const topScores = loadTopScores();
  topScores.push(score);
  saveTopScores(topScores);
};
