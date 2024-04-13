import { render } from "@testing-library/react";
import React from "react";
import Ruffle from "./ruffle";

describe("Ruffle", () => {
  test("renders the Flash file", () => {
    render(<Ruffle src="../../static/demo.swf" />);
  });
});
