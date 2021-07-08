import { useEffect, useState, useRef, SyntheticEvent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const FILTER_DELAY = 1000;

interface IMethodsListFilterProps {
  filterKey: string;
}

const MethodsListFilter = (props: IMethodsListFilterProps) => {
  const { filterKey } = props;
  const searchParams = new URLSearchParams(useLocation().search);
  const filter = searchParams.get(filterKey) || '';

  const history = useHistory();
  const location = useLocation();

  const [displayedFilter, setDisplayedFilter] = useState(filter);
  const filterTimeoutRef = useRef<NodeJS.Timeout>();

  const setFilter = (newFilter: string) => {
    searchParams.set(filterKey, newFilter);
    location.search = searchParams.toString();
    history.push(location);
  };

  // This is needed for cases when the filter was changed extrenally (for example, by clicking Back button)
  useEffect(() => setDisplayedFilter(filter), [filter]);

  const changeDisplayedFilter = (event: SyntheticEvent<HTMLInputElement>) => {
    const newFilter = (event.target as HTMLInputElement).value;
    setDisplayedFilter(newFilter);
    if (filterTimeoutRef.current) {
      clearTimeout(filterTimeoutRef.current);
    }
    filterTimeoutRef.current = setTimeout(() => {
      setFilter(newFilter);
    }, FILTER_DELAY);
  };

  return (
    <input
      type="text"
      placeholder="Start typing to filter..."
      value={displayedFilter}
      onChange={changeDisplayedFilter}
    />
  );
};

export default MethodsListFilter;
