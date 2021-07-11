import ILists from './ILists';

interface IMethodsList {
  title: string;
  key: keyof ILists;
  list: string[];
}

export default IMethodsList;
