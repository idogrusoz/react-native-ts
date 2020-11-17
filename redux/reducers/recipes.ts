import { Action } from "./../../types";
import { RecipeState } from "../../types";
import { Actions } from "../actions/actionTypes";

const initialState: RecipeState = {
    searchResults: [],
    recipe: null,
    randomResults: [],
    loading: false,
    isRandom: true,
    randomCount: 1,
};

function recipes(state = initialState, action: Action<any, any>) {
    switch (action.type) {
        case Actions.SET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: [...action.payload.result],
                loading: false,
            };
        case Actions.SET_RECIPE:
            return {
                ...state,
                recipe: { ...action.payload.recipe },
                loading: false,
            };
        case Actions.SET_RANDOM_RESULTS:
            return {
                ...state,
                randomResults: [...action.payload.randomResults],
                loading: false,
            };
        case Actions.SET_LOADING:
            return {
                ...state,
                loading: action.payload.loading,
            };
        case Actions.SET_IS_RANDOM:
            return {
                ...state,
                isRandom: action.payload.isRandom,
            };
        case Actions.SET_RANDOM_COUNT:
            return {
                ...state,
                randomCount: action.payload.randomCount,
            };
        default:
            return state;
    }
}
export default recipes;
