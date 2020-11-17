import { Recipe, RecipeSummary } from "./../../types";
import axios from "axios";
import { Dispatch } from "redux";
import * as RootNavigation from "../../navigation/RootNavigation";
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

export const clearSelected = (): Action<"selected", Array<never>> => {
    return {
        type: Actions.CLEAR_SELECTED,
        payload: {
            selected: [],
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
            .catch((err) => RootNavigation.replace("Error"));
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

export const setLoading = (loading: boolean): Action<"loading", boolean> => {
    return {
        type: Actions.SET_LOADING,
        payload: {
            loading,
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
            .catch((err) => RootNavigation.replace("Error"));
    };
};

export const setRecipe = (recipe: Recipe): Action<"recipe", Recipe> => {
    return {
        type: Actions.SET_RECIPE,
        payload: {
            recipe,
        },
    };
};

export const setRecipeWithFetch = (id: number) => {
    return (dispatch: Dispatch<Action<"recipe", Recipe>>) => {
        axios
            .get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=e07f3d4571c945aba22f1c2255303094`)
            .then((response) => response.data)
            .then((recipe) => dispatch(setRecipe(recipe)))
            .catch((err) => RootNavigation.replace("Error"));
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

export const setRandomResults = (count: number) => {
    return (dispatch: Dispatch<Action<"randomResults", Recipe[]>>) => {
        axios
            .get(`https://api.spoonacular.com/recipes/random?number=${count}&apiKey=e07f3d4571c945aba22f1c2255303094`)
            .then((response) => response.data.recipes)
            .then((recipes) => dispatch(setRandomResultsAsync(recipes)))
            .catch((err) => RootNavigation.replace("Error"));
    };
};

export const setIsRandom = (isRandom: boolean): Action<"isRandom", boolean> => {
    return {
        type: Actions.SET_IS_RANDOM,
        payload: {
            isRandom,
        },
    };
};

export const setRandomCount = (randomCount: number): Action<"randomCount", number> => {
    return {
        type: Actions.SET_RANDOM_COUNT,
        payload: {
            randomCount,
        },
    };
};
