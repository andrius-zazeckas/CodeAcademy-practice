import { render, screen } from "@testing-library/react";
import { Cart } from "../Cart";
import renderer from "react-test-renderer";
import { ProductsContext } from "../../ProductsContext";

describe("Cart", () => {
  const cartProducts = [
    {
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
      amount: 2,
    },
  ];

  it("should render Cart", () => {
    render(<Cart />);
    expect(screen.getByLabelText("cart")).toBeVisible();

    const tree = renderer.create(<Cart />);

    expect(tree).toMatchSnapshot();
  });

  it.only("should show product amount in cart", () => {
    render(
      <ProductsContext.Provider
        value={{
          cartProducts,
          fetchedProducts: [],
          dispatch: () => {},
        }}
      >
        <Cart />
      </ProductsContext.Provider>
    );

    expect(screen.getByLabelText("product amount").textContent).toBe("2");

    const tree = renderer.create(
      <ProductsContext.Provider
        value={{
          cartProducts,
          fetchedProducts: [],
          dispatch: () => {},
        }}
      >
        <Cart />
      </ProductsContext.Provider>
    );

    expect(tree).toMatchSnapshot();
  });

  it.only("should calculate correct cart total price", () => {
    render(
      <ProductsContext.Provider
        value={{
          cartProducts,
          fetchedProducts: [],
          dispatch: () => {},
        }}
      >
        <Cart />
      </ProductsContext.Provider>
    );

    const totalPrice = cartProducts[0].amount * cartProducts[0].price;

    expect(screen.getByLabelText("total price").textContent).toBe(
      `€${totalPrice}`
    );

    const tree = renderer.create(
      <ProductsContext.Provider
        value={{
          cartProducts,
          fetchedProducts: [],
          dispatch: () => {},
        }}
      >
        <Cart />
      </ProductsContext.Provider>
    );

    expect(tree).toMatchSnapshot();
  });
});
