import { render, RenderAPI } from "@testing-library/react-native";
import React from "react";
import SingleResult from "../SingleResult";
jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
}));
jest.mock("@react-navigation/native", () => ({
    useNavigation: jest.fn(),
}));

describe("Single result test", () => {
    let wrapper: RenderAPI;
    beforeEach(() => {
        wrapper = render(<SingleResult id={1} image="image" title="name" />);
    });
    it("renders witthout crash", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
