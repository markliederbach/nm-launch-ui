import React from "react";
import { shallow, configure } from "enzyme";
import App from "../src/App";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
    wrapper.update();
  });
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
