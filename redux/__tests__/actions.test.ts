import { removeSelected, setSuggestions, setSuggestionsAsync } from "./../actions/actions";
import { Actions } from "./../actions/actionTypes";
import React from "react";
import { setInput, setSelected } from "../actions/actions";
import { Ingredient } from "../../types";
import axios from "axios";
jest.mock("axios");

describe("Redux actions test", () => {
    const mockIngredient: Ingredient = {
        id: 1,
        name: "mockName",
        image: "mockImage",
    };
    const mockArray: Ingredient[] = [mockIngredient];
    it("creates set input action", () => {
        const inputResult = setInput("test");
        expect(inputResult.type).toBe(Actions.SET_INPUT);
        expect(inputResult.payload.input).toBe("test");
    });
    it("creates selected action", () => {
        const inputResult = setSelected(mockIngredient);
        expect(inputResult.type).toBe(Actions.SET_SELECTED);
        expect(inputResult.payload.selected).toEqual(mockIngredient);
    });
    it("creates ate suggestions action", () => {
        const suggestions = setSuggestionsAsync(mockArray);
        expect(suggestions.type).toBe(Actions.SET_SUGGESTIONS);
        expect(suggestions.payload.suggestions).toEqual(mockArray);
    });
    it("creates remove action", () => {
        const remove = removeSelected(1);
        expect(remove.type).toBe(Actions.REMOVE_SELECTED);
        expect(remove.payload.index).toEqual(1);
    });
});
