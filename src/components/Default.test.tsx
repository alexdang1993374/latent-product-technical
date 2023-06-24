import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Default from "./Default";

describe("Default", () => {
  it("renders without crashing", () => {
    render(<Default />);
    expect(screen.getByAltText("Latent Logo")).toBeInTheDocument();
  });

  it("renders the correct text content", () => {
    render(<Default />);
    expect(
      screen.getByText(
        "Building Medical Language Models to automate hospital operations, starting with insurance authorizations"
      )
    ).toBeInTheDocument();
  });
});
