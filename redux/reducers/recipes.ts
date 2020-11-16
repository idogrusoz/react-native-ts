import { Action } from "./../../types";
import { RecipeState } from "../../types";
import { Actions } from "../actions/actionTypes";

const initialState: RecipeState = {
    searchResults: [],
    selectedRecipe: null,
    detailedRecipe: null,
    randomResults: [],
};

function recipes(state = initialState, action: Action<any, any>) {
    switch (action.type) {
        case Actions.SET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: [...action.payload.result],
            };
        case Actions.SET_SELECTED_RECIPE:
            return {
                ...state,
                selectedRecipe: { ...action.payload.recipe },
            };
        case Actions.SET_DETAILED_RECIPE:
            return {
                ...state,
                detailedRecipe: { ...action.payload.detailedRecipe },
            };
        case Actions.SET_RANDOM_RESULTS:
            return {
                ...state,
                randomResults: [...action.payload.randomeResults],
            };
        default:
            return state;
    }
}
export default recipes;
