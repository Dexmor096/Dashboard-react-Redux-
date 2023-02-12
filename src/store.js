import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {positionReducer} from "./features/positions/positionsSlice";
import {filterReducer} from "./features/filters/filtersSlice";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    positions: positionReducer,
    filters: filterReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
});
export const persistor = persistStore(store);