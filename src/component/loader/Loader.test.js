import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

test("show loading component", () => {
  render(<Loader />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});
