import { render, RenderAPI } from "@testing-library/react-native";
import React from "react";
import Recipe from "../Recipe";

const mockSelect = jest.fn();
jest.mock("react-redux", () => ({
    useSelector: () => mockSelect,
}));

describe("Recipe test", () => {
    let wrapper: RenderAPI;
    beforeEach(() => {
        wrapper = render(<Recipe />);
    });
    it("renders without crash", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
