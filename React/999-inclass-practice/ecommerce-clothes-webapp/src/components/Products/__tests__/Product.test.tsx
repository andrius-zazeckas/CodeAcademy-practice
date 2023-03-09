import { render, screen } from "@testing-library/react";
import { Product } from "../Product";
import renderer from "react-test-renderer";

describe("Product", () => {
  it("should render Product", () => {
    render(<Product />);
    expect(screen.getByLabelText("product")).toBeVisible();
  });

  it.only("should show product title", () => {
    render(<Product />);
    expect(screen.getByText("Fjallraven", { exact: false }));
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<Product />);

    expect(tree).toMatchSnapshot();
  });
});
