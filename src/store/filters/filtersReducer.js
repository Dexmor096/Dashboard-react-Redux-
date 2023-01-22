import {ADD_FILTER, CLEAR_FILTER, REMOVE_FILTER,} from "./filtersAction"


export const filterReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FILTER: {
            if( state.includes(action.filters)) {
               return state;
            }
            return [...state, action.filters]
        }
        case REMOVE_FILTER: {
            return state.filter(item => item !== action.filters)
        }
        case CLEAR_FILTER: {
            return []
        }
        default: {
            return state;
        }
    }

}