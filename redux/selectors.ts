import { RootState } from "./../types";
export const ingredientsSelector = (state: RootState) => state.ingredients;
export const recipesSelector = (state: RootState) => state.recipes;
