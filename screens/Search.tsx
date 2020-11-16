import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View } from "../components/Themed";
import { RootState } from "../types";

const Search = () => {
    const { input, suggestions, selected } = useSelector((state: RootState) => state.ingredients);
    const dispatch = useDispatch();
    return <View></View>;
};

export default Search;
