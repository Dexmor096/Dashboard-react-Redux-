import { JobPosition } from './JobPosition';
import {selectVisiblePositions} from "../store/positions/positionSelectors";
import {useDispatch, useSelector} from "react-redux";
import {addFilter} from "../store/filters/filtersAction";
import {selectFilter} from "../store/filters/filtersSelector";


const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilter);
  const visiblePositions = useSelector((state) => selectVisiblePositions(state, currentFilters))

  const handleAddFilter = (filters) => {
  dispatch(addFilter(filters))
  }
  return (
    <div className='job-list'>
      {visiblePositions.map(item => (
        <JobPosition
            key={item.id}
            handleAddFilter={handleAddFilter}
            {...item}
        />
      ))}
    </div>
  )
}

export {JobList};