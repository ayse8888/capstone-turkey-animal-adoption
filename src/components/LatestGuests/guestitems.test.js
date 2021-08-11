import React from "react";
import renderer from "react-test-renderer";
import GuestItems from "./GuestItems";

it("renders correctly", () => {
  const tree = renderer.create(<GuestItems />).toJSON();
  expect(tree).toMatchSnapshot();
});
