import { render, screen } from "@testing-library/react";
import { Product } from "../Product";
import renderer from "react-test-renderer";

describe("Product", () => {
  const product = {
    id: 1,
    title: "Test",
    price: 2.99,
    description: "For testing purposes",
    category: "Testing category",
    image: "testImage.jpg",
    rating: {
      rate: 4,
      count: 2,
    },
  };

  it("should render Product", () => {
    render(<Product product={product} />);
    expect(screen.getByLabelText("product")).toBeVisible();

    const tree = renderer.create(<Product product={product} />);

    expect(tree).toMatchSnapshot();
  });

  it("should show product information", () => {
    render(<Product product={product} />);

    const productTitle = screen.getByLabelText("product title");
    const productImage = screen.getByRole("img");
    const productPrice = screen.getByLabelText("product price");

    expect(productTitle).toBeVisible();
    expect(productImage).toBeVisible();
    expect(productImage).toHaveAttribute("src", product.image);

    expect(productPrice).toBeVisible();

    const tree = renderer.create(<Product product={product} />);

    expect(tree).toMatchSnapshot();
  });
});
