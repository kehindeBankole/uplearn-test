import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Loader from "../component/Loader";
import renderer from "react-test-renderer";
import JobCard from "../component/JobCard";
test("show loading component", () => {
  const loader = render(<Loader />);
  const loaderElement = loader.getByTestId("loader-box");
  expect(loaderElement).toBeInTheDocument();
  expect(loaderElement).toHaveClass("loader-box");
  expect(loaderElement).toHaveTextContent("Loading..");
});

test("show", () => {
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
  const tree = renderer.create(<JobCard item={item} />).toJSON();
  expect(tree).toMatchSnapshot();
});
