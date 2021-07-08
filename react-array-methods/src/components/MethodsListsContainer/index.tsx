import MethodsList from '../MethodsList';
import Tooltip from '../Tooltip';
import IMethodsList from '../../interfaces/IMethodsList';

import './index.css';

interface IMethodsListsContainerProps {
  readonly: boolean;
  withLinks: boolean;
  lists: IMethodsList[];
}

const MethodsListsContainer = (props: IMethodsListsContainerProps) => {
  const { readonly, withLinks, lists } = props;
  return (
    <div className="MethodsListsContainer">
      <Tooltip />
      {lists.map((item, index) => (
        <MethodsList
          withLinks={withLinks}
          title={item.title}
          key={item.key}
          ownListKey={item.key}
          leftListKey={(!readonly && index > 0 && lists[index - 1].key) || undefined}
          rightListKey={(!readonly && index < lists.length - 1 && lists[index + 1].key) || undefined}
          list={item.list}
        />
      ))}
    </div>
  );
};

export default MethodsListsContainer;
