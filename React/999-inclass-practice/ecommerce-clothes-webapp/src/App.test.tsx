import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import nock from "nock";

import { App } from "./App";

describe("App", () => {
  it("should add and remove cart products", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Cart (0)"));

      const addButton = screen.getAllByLabelText("add product")[0];
      fireEvent.click(addButton);
    });

    const addButton = screen.getAllByLabelText("add product")[0];

    expect(screen.getByText("Cart (1)"));

    fireEvent.click(addButton);

    expect(screen.getByText("Cart (1)"));

    const cartLink = screen.getByLabelText("cart link");
    fireEvent.click(cartLink);

    expect(screen.getAllByLabelText("cart product").length).toBe(1);

    const removeButton = screen.getByLabelText("remove product");
    fireEvent.click(removeButton);

    expect(screen.getByText("Cart (1)"));
    expect(screen.getAllByLabelText("cart product").length).toBe(1);

    const newRemoveButton = screen.getByLabelText("remove product");
    fireEvent.click(newRemoveButton);

    expect(screen.getByText("Cart (0)"));
    expect(screen.queryByLabelText("cart product")).toBe(null);
  });
});
