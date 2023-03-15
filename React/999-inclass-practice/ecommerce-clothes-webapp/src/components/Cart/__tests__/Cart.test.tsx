import { fireEvent, render, screen } from "@testing-library/react";
import { Cart } from "../Cart";
import renderer from "react-test-renderer";
import { ProductsContext } from "../../ProductsContext";

describe("Cart", () => {
  it("should render Cart", () => {
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

    render(<Cart />);

    expect(screen.getByLabelText("cart")).toBeVisible();

    expect(screen.getByLabelText("empty cart")).toBeVisible();
    expect(screen.getByLabelText("empty cart").textContent).toBe(
      "No products in cart"
    );

    const tree = renderer.create(<Cart />);

    expect(tree).toMatchSnapshot();
  });

  it("should show product amount in cart", () => {
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

    expect(screen.getByLabelText("product amount").textContent).toBe(
      `${cartProducts[0].amount}`
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

  it("should calculate cart total price", () => {
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

    const currencyFormat = new Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: "EUR",
    });

    const totalPrice = cartProducts[0].amount * cartProducts[0].price;

    expect(screen.getByLabelText("total price").textContent).toBe(
      `${currencyFormat.format(totalPrice)}`
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

  it("removes an item from the cart", () => {
    const cartProducts = [
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 },
        amount: 1,
      },
      {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: { rate: 4.1, count: 259 },
        amount: 1,
      },
    ];

    const removeFunction = jest.fn();

    render(
      <ProductsContext.Provider
        value={{
          cartProducts,
          fetchedProducts: [],
          dispatch: removeFunction,
        }}
      >
        <Cart />
      </ProductsContext.Provider>
    );

    const removeButton = screen.getAllByLabelText("remove product")[0];
    fireEvent.click(removeButton);

    expect(removeFunction).toHaveBeenCalledWith({
      payload: { productId: 1 },
      type: "removeProduct",
    });

    expect(removeFunction).toHaveBeenCalledTimes(1);
  });
});
