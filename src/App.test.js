import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the hero with my name", () => {
  render(<App />);
  expect(screen.getAllByText(/césar rincón/i).length).toBeGreaterThan(0);
});
