import { useLocation } from 'react-router-dom';
import ILists from '../../store/ILists';
import MethodItem from '../MethodItem';
import MethodsListFilter from './MethodsListFilter';

interface IMethodsListProps {
  withLinks: boolean;
  title: string;
  ownListKey: keyof ILists;
  leftListKey?: keyof ILists;
  rightListKey?: keyof ILists;
  list: string[];
}

const MethodsList = (props: IMethodsListProps) => {
  const { withLinks, title, ownListKey, leftListKey, rightListKey, list } = props;
  const filterKey = `${title}Filter`;

  const filter = new URLSearchParams(useLocation().search).get(filterKey);

  const filteredList = filter ? list.filter((method) => method.toLowerCase().includes(filter.toLowerCase())) : list;
  return (
    <div className="MethodsList">
      <h3>{title}</h3>
      <MethodsListFilter filterKey={filterKey} />
      <ul>
        {filteredList.map((method) => (
          <MethodItem
            withLinks={withLinks}
            key={method}
            method={method}
            ownListKey={ownListKey}
            leftListKey={leftListKey}
            rightListKey={rightListKey}
          />
        ))}
      </ul>
    </div>
  );
};

export default MethodsList;
