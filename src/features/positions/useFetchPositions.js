import {useEffect} from "react";
import {useDispatch} from "react-redux";

import {addPositions} from "./positionsSlice";
import data from "../../mock/data.json";

export const useFetchPositions = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addPositions(data))
    });
}