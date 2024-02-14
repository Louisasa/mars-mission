import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from ".";

describe("Testing the Navbar for Normal screen", () => {
  test("How Many Links in the Navbar", () => {
    const component = render(<NavBar />);
  });
  test("Is All Links working in the Nav bar", () => {});
  test("hamBurger Menu should not be visible in the Nav  for a bigger screen size ", () => {});
  test("NavBar is visible in both the Pages", () => {});
});
describe("Testing the Navbar for Mobile screen", () => {
  test("hamburger icon is visible", () => {
    render(<NavBar />);
  });
  test("When hamburger icon is clicked, Vertical menu is displayed", () => {});
  test("When hamburger icon is clicked, Close button is Visible", () => {});
  test("hamburger icon is visible in both the Pages", () => {});
  test("Vertical NavBar is visible in both the Pages", () => {});
  test("Verify all the links are active or when they is clicked, we can navigater to that page", () => {});
  test("When the curser is clicked outside, Vertical menu should be closed and Hamburger icon is visible", () => {});
});
