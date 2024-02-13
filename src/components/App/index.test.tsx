import React from "react";
import { render, screen } from "@testing-library/react";
import App from ".";

describe("App page", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.queryAllByText(/hi/i);
    expect(linkElement[0]).toBeInTheDocument();
  });
});
