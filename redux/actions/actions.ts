import axios from "axios";
import { Dispatch } from "redux";
import { Action, Ingredient } from "../../types";
import { Actions } from "./actionTypes";

export const setInput = (input: string): Action<"input", string> => {
    return {
        type: Actions.SET_INPUT,
        payload: {
            input,
        },
    };
};

export const setSelected = (selected: Ingredient): Action<"selected", Ingredient> => {
    return {
        type: Actions.SET_SELECTED,
        payload: {
            selected,
        },
    };
};

export const setSuggestionsAsync = (suggestions: Ingredient[]): Action<"suggestions", Ingredient[]> => {
    return {
        type: Actions.SET_SUGGESTIONS,
        payload: {
            suggestions,
        },
    };
};

export const setSuggestions = (input: string) => {
    return (dispatch: Dispatch<Action<"suggestions", Ingredient[]>>) => {
        axios
            .get(
                `https://api.spoonacular.com/food/ingredients/search?query=${input}&number=10&apiKey=e07f3d4571c945aba22f1c2255303094`,
            )
            .then((res) => res.data.results)
            .then((results) => dispatch(setSuggestionsAsync(results)))
            .catch((err) => console.log("err", err));
    };
};

export const removeSelected = (index: number): Action<"index", number> => {
    return {
        type: Actions.REMOVE_SELECTED,
        payload: {
            index,
        },
    };
};
