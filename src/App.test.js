import { render, screen } from "@testing-library/react";
import FooterSection from "./components/FooterSection";
import Header from "./components/Header";

test("Destination Served", () => {
  render(<FooterSection />);
  const linkElement = screen.getByText(/PROHIBITED ITEMS/i);
  expect(linkElement).toBeInTheDocument();
});

test("checking list items", () => {
  render(<Header />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(7);
});
