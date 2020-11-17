import { render, RenderAPI } from "@testing-library/react-native";
import React from "react";
import SingleResult from "../SingleResult";

describe("Single result test", () => {
    let wrapper: RenderAPI;
    beforeEach(() => {
        wrapper = render(<SingleResult image="image" title="name" />);
    });
    it("renders witthout crash", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
