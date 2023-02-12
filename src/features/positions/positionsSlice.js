import {createSlice} from "@reduxjs/toolkit";

const positionsSlice = createSlice({
    name: "@@positions",
    initialState: [],
    reducers: {
        addPositions: (state, action) => action.payload
    }
})

export const {addPositions} = positionsSlice.actions;
export const positionReducer = positionsSlice.reducer;

export const selectVisiblePositions = (state, filters = []) => {
    if(filters.length === 0) {
        return state.positions;
    }
    return state.positions.filter(pos => {
        const positionFilter = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools)

        return filters.every(filter => positionFilter.includes(filter))
    })
}