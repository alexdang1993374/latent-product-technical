import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  const mockMenuItems = [
    { label: "Item 1", onClick: jest.fn() },
    { label: "Item 2", onClick: jest.fn() },
  ];

  it("renders the dropdown button with correct label", () => {
    render(<Dropdown buttonLabel="Test Button" menuItems={mockMenuItems} />);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });
});
