const TOP_SCORES_STORAGE_KEY = 'top-scores';

const saveTopScores = (topScores) => {
  localStorage.setItem(TOP_SCORES_STORAGE_KEY, JSON.stringify(topScores));
};

export const loadTopScores = () => {
  const topScores = localStorage.getItem(TOP_SCORES_STORAGE_KEY);
  return topScores ? JSON.parse(topScores) : [];
};

export const addTopScore = (name, time, total, right, wrong) => {
  const topScores = loadTopScores();
  topScores.push({ name, time, total, right, wrong });
  saveTopScores(topScores);
};
