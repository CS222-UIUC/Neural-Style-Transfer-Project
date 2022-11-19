import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import loadModel from "../model/Main";
import Draw from "./model/Draw.js";
import Receive from "./model/Receive.js";

test("Test fetch from express", () => {
  render(<Receive route="api" />);
  const ele = screen.getByTestId("apiReceive");
  expect(ele.innerHTML == "Backend query received");
});
