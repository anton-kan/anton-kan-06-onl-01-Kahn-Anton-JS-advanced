import ILists from '../../store/ILists';

interface IMethodsList {
  title: string;
  key: keyof ILists;
  list: string[];
}

export default IMethodsList;
