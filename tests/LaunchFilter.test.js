import React from "react";
import { shallow, configure } from "enzyme";
import renderer from "react-test-renderer";
import { LaunchFilter } from "../src/components/Filter/LaunchFilter";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("LaunchFilter", function() {
  let spy, wrapper;
  beforeAll(() => {
    spy = jest.fn();
  });
  beforeEach(() => {
    spy.mockReset();
    wrapper = shallow(<LaunchFilter onFilter={spy} />);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<LaunchFilter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("calls onFilter after keystroke", () => {
    wrapper
      .find("Input")
      .first()
      .simulate("change", {
        target: { name: "filterValue", value: "Falcon" }
      });
    wrapper
      .find("Input")
      .first()
      .simulate("keyup");
    expect(spy).toBeCalledWith({ name: "Falcon" });
    expect(wrapper.state("filterValue")).toEqual("Falcon");
  });
});
