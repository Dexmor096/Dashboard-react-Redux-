import {ADD_POSITIONS} from "./positionActions"

export const positionReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_POSITIONS: {
console.log(action.positions)
            return action.positions;
        }
        default:
            return state;
    }
}
