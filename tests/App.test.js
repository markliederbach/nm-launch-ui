import React from "react";
import { shallow } from "enzyme";
import App from "../src/App";

describe("APP", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
    wrapper.update();
  });
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
