import {Badge} from 'UI/Badge';
import {Card} from 'UI/Card';
import {Stack} from 'UI/Stack';
import {useDispatch, useSelector} from "react-redux";
import {selectFilter} from "../store/filters/filtersSelector";
import {clearFilter, removeFilter} from "../store/filters/filtersAction";


const FilterPanel = () => {
    const dispatch = useDispatch()
    const filter = useSelector(selectFilter);
    // const onClear = (filter) => {
    //     dispatch(removeFilter(filter))
    // }
    if(filter.length === 0) {
        return null;
    } else
    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    {filter.map(filter => (
                        <Badge
                            variant="clearable"
                            key={filter}
                            onClear={() => dispatch(removeFilter(filter))}
                        >
                            {filter}</Badge>
                    ))
                    }
                </Stack>

                <button
                    className='link'
                    onClick={() => dispatch(clearFilter)}
                >Clear</button>
            </div>
        </Card>
    )
}

export {FilterPanel};