import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../Home";
describe("Testin Home component", () => {
  it("Test the title header is in the document", () => {
    render(<Home />);
    const header = screen.getByText("Math Magicians");
    expect(header).toBeInTheDocument();
  });

  it("Test para 1 is in the document as well", () => {
    render(<Home />);
    const header = screen.getByTestId("p1");
    expect(header).not.toBeEmptyDOMElement();
  });
});
