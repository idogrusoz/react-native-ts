import { IngredientsState, Action } from "../../types";
import { Actions } from "../actions/actionTypes";

const initialState: IngredientsState = {
    input: "",
    suggestions: [],
    selected: [],
};

function ingredients(state = initialState, action: Action<any, any>) {
    switch (action.type) {
        case Actions.SET_INPUT:
            return {
                ...state,
                input: action.payload.input,
            };
        case Actions.SET_SELECTED:
            return {
                ...state,
                selected: [...state.selected, action.payload.selected],
            };
        case Actions.REMOVE_SELECTED:
            return {
                ...state,
                selected: state.selected.filter((_, i: number) => i !== action.payload.index),
            };

        case Actions.SET_SUGGESTIONS: {
            return {
                ...state,
                suggestions: [...action.payload.suggestions],
            };
        }
        default:
            return state;
    }
}
export default ingredients;
