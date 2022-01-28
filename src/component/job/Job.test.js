import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import JobCard from "./JobCard";

test("job title", async () => {
  let item = {
    slug: "full-stack-javascript-developer",
    title: "Full Stack JavaScript Developer",
    id: "cjwt2a8j700by0793lnvon5c9",
    company: {
      name: "Unrealists",
      slug: "unrealists",
      logoUrl: null,
    },
    cities: [
      {
        name: "Berlin",
        id: "cjuv51m3s00fc0735xosrvscp",
      },
    ],
    countries: [],
    remotes: [
      {
        type: "remote",
      },
    ],
  };
  render(
    <BrowserRouter>
      <JobCard item={item} />
    </BrowserRouter>
  );
  const box = screen.getByTestId("job-box");
  fireEvent.click(box);
  expect(window.location.href).toBe(
    "http://localhost:3000/about/full-stack-javascript-developer/unrealists"
  );
  expect(
    screen.getByText("Full Stack JavaScript Developer")
  ).toBeInTheDocument();
  expect(item).toHaveProperty("slug");
  expect(item).toHaveProperty("title");
});
