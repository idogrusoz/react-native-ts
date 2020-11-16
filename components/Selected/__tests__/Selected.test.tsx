import React from "react";
import { fireEvent, render, RenderAPI } from "@testing-library/react-native";
import Selected from "../Selected";
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
    useDispatch: () => mockDispatch,
}));

describe("Selected test", () => {
    let wrapper: RenderAPI;
    beforeEach(() => {
        wrapper = render(<Selected name="name" index={1} />);
    });

    it("renders without crash", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("dispays the name", () => {
        const text = wrapper.getByText("name");
        expect(text).not.toBeNull();
    });
    it("calls dispatch", () => {
        const touch = wrapper.getByText("x");
        fireEvent(touch, "onPress");
        expect(mockDispatch).toBeCalled();
    });
});
