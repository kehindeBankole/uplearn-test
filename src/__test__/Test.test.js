import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Loader from "../component/Loader";
import Error from "../component/Error";
import TestRenderer from "react-test-renderer";
import JobCard from "../component/JobCard";
import { BrowserRouter } from "react-router-dom";

test("show loading component", () => {
  const loader = render(<Loader data-testid="loader-box" />);
  const loaderElement = loader.getByTestId("loader-box");
  expect(loaderElement).toBeInTheDocument();
  expect(loaderElement).toHaveClass("loader-box");
  expect(loaderElement).toHaveTextContent("Loading..");
});

test("show error component", () => {
  const error = render(<Error />);
  const errorElement = error.getByTestId("loader-box");
  expect(errorElement).toBeInTheDocument();
  expect(errorElement).toHaveClass("loader-box");
  expect(errorElement).toHaveTextContent("error , failed to fetch");
});

test("take snapshot", () => {
  const item = {
    __typename: "Job",
    title: "Senior Fullstack Engineer - Platform",
    id: "cjz1ipl9x009a0758hg68h7vy",
    company: {
      __typename: "Company",
      name: "Segment",
    },
    cities: [
      {
        __typename: "City",
        name: "San Francisco",
      },
    ],
    countries: [],
    remotes: [],
  };
  const { container } = render(
    <BrowserRouter>
      <JobCard item={item} />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
