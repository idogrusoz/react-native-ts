import { Recipe, RecipeSummary } from "./../../types";
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
                `https://api.spoonacular.com/food/ingredients/search?query=${input}&number=4&apiKey=e07f3d4571c945aba22f1c2255303094`,
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

export const setSearchResultsAsync = (result: RecipeSummary[]): Action<"result", RecipeSummary[]> => {
    return {
        type: Actions.SET_SEARCH_RESULTS,
        payload: {
            result,
        },
    };
};

export const setSearchResults = (ingredients: string[]) => {
    const queryString: string = ingredients.join(",+");
    return (dispatch: Dispatch<Action<"result", RecipeSummary[]>>) => {
        axios
            .get(
                `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${queryString}&number=4&apiKey=e07f3d4571c945aba22f1c2255303094`,
            )
            .then((response) => response.data)
            .then((result) => dispatch(setSearchResultsAsync(result)))
            .catch((err) => console.log("err", err));
    };
};

export const setSelectedRecipe = (recipe: RecipeSummary): Action<"recipe", RecipeSummary> => {
    return {
        type: Actions.SET_SELECTED_RECIPE,
        payload: {
            recipe,
        },
    };
};

export const setDetailedRecipe = (detailedRecipe: Recipe): Action<"detailedRecipe", Recipe> => {
    return {
        type: Actions.SET_DETAILED_RECIPE,
        payload: {
            detailedRecipe,
        },
    };
};

export const setRandomResultsAsync = (randomResults: Recipe[]): Action<"randomResults", Recipe[]> => {
    return {
        type: Actions.SET_RANDOM_RESULTS,
        payload: {
            randomResults,
        },
    };
};

export const setRandomResults = () => {
    return (dispatch: Dispatch<Action<"randomResults", Recipe[]>>) => {
        axios
            .get("https://api.spoonacular.com/recipes/random?number=4")
            .then((response) => response.data.recipes)
            .then((resipes) => dispatch(setRandomResultsAsync(resipes)))
            .catch((err) => console.log("err", err));
    };
};
