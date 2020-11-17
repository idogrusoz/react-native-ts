import React from "react";
import { render, RenderAPI } from "@testing-library/react-native";
import SelectedWrapper from "../SelectedWrapper";
import * as redux from "react-redux";
import { mockSelected } from "../mockData";

const spySelect = jest.spyOn(redux, "useSelector");
const spyDispatch = jest.spyOn(redux, "useDispatch");

describe("SelectedWrapper test", () => {
    let wrapper: RenderAPI;
    const props: any = {
        navigaion: {
            navigate: jest.fn(),
        },
    };

    beforeEach(() => {
        spySelect.mockReturnValue({ selected: mockSelected });
        spyDispatch.mockImplementation(jest.fn());
        wrapper = render(<SelectedWrapper {...props} />);
    });
    it("renders without crash", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
