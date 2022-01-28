import { render, screen } from "@testing-library/react";
import Error from "./Error";

test("show error component", () => {
  render(<Error />);
  expect(screen.getByText("error , failed to fetch")).toBeInTheDocument();
});
