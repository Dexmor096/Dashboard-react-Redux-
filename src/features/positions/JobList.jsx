import { JobPosition } from './JobPosition';
import {useDispatch} from "react-redux";
import {addFilter} from "../filters/filtersSlice";
import {usePositions} from "./usePositions";
import {useFetchPositions} from "./useFetchPositions";


const JobList = () => {
  const positions = usePositions();
  useFetchPositions();
  const dispatch = useDispatch();

  const handleAddFilter = (filters) => {
  dispatch(addFilter(filters))
  }
  return (
    <div className='job-list'>
      {positions.map(item => (
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