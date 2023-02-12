import {useSelector} from "react-redux";

import {selectVisiblePositions} from "./positionsSlice";
import {selectFilter} from "../filters/filtersSlice";

export const usePositions = () => {
    const currentFilters = useSelector(selectFilter);
    const positions = useSelector((state) => selectVisiblePositions(state, currentFilters));

    return positions;
}