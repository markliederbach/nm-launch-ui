import React from "react";
import { shallow, configure } from "enzyme";
import renderer from "react-test-renderer";
import { LaunchTable } from "../src/components/Grid/LaunchTable";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("LaunchTable", function() {
  let defaultProps;
  beforeAll(() => {
    defaultProps = {
      results: {
        launches: [
          {
            est_timestamp: "2018-09-27T09:34:00",
            name: "Some launch name",
            location: {
              name: "location name",
              map_url: "http://example.com"
            },
            missions: [
              {
                agencies: [
                  {
                    name: "NASA"
                  },
                  {
                    name: "ESA"
                  }
                ]
              }
            ],
            rocket: {
              name: "Falcon 9",
              info_url: "http://example2.com"
            }
          }
        ]
      }
    };
  });

  it("renders props correctly", () => {
    const tree = renderer.create(<LaunchTable {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
