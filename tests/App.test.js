import React from "react";
import { shallow, configure } from "enzyme";
import renderer from "react-test-renderer";
import App from "../src/App";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
    wrapper.update();
  });
  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
