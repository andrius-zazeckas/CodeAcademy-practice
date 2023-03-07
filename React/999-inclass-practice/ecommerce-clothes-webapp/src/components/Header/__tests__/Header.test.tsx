import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../Header";

describe("Header", () => {
  //   it("should render links", () => {
  //     render(
  //       <BrowserRouter>
  //         <Header />
  //       </BrowserRouter>
  //     );

  //     expect(screen.getByLabelText("home link")).toBeVisible();
  //     expect(screen.getByLabelText("cart link")).toBeVisible();
  //   });

  it.each(["home link", "cart link"])("should render %s", (link) => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(link)).toBeVisible();
  });
});
