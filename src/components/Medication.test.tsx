import React, { ReactNode } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Medication from "./Medication";

// eslint-disable-next-line react/display-name
jest.mock("@mui/icons-material/PlayArrow", () => () => (
  <div>PlayArrowIcon</div>
));

interface MotionDivProps {
  children: ReactNode;
}

jest.mock("framer-motion", () => {
  return {
    motion: {
      div: ({ children }: MotionDivProps) => <div>{children}</div>,
    },
  };
});

const mockMedication = {
  openfda: {
    brand_name: ["Medicine Brand"],
  },
  description: ["This is a mock description"],
  dosage_forms_and_strengths: ["This is a mock dosage info"],
};

describe("Medication component", () => {
  test("renders properly with the passed props", () => {
    render(<Medication medication={mockMedication} isLast={false} />);

    expect(screen.getByText("Medicine Brand")).toBeInTheDocument();
    expect(screen.getByText("PlayArrowIcon")).toBeInTheDocument();
    expect(
      screen.queryByText("DESCRIPTION: mock description")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("APPLICATION & DOSAGE: mock dosage info")
    ).not.toBeInTheDocument();
  });
});
