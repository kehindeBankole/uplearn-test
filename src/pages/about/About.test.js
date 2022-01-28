import { MockedProvider } from "@apollo/client/testing";
import { GETAJOB } from "../../graphql/Queries";
import { render, screen } from "@testing-library/react";
import About from "./About";

const jobmocks = {
  request: {
    query: GETAJOB,
    variables: {
      input: {
        companySlug: "segment",
        jobSlug: "senior-fullstack-engineer-platform",
      },
    },
  },
  result: {
    data: {
      job: {
        id: "cjz1ipl9x009a0758hg68h7vy",
        title: "Senior Fullstack Engineer - Platform",
        description:
          "# **Overview **\n\nAt Segment, we believe companies should be able to send their customer data wherever they want, whenever they want, with no fuss. We make this easy with a single pipeline that collects, stores, filters, transforms, and sends data to hundreds of business tools with the flip of a switch. Historically, we’ve built integrations with more than 250 different customer data tools ourselves(think Mixpanel, Google Analytics, Stripe).This March, we opened up our [++**Developer Center**++](https://segment.com/partners/developer-center/). For the first time, new companies could build integrations upon Segment data, using our self-service workflow. In that time, we’ve onboarded **60 separate companies**, each of whom built endpoints to work with our spec. We're now looking for a Senior Fullstack Engineer to help us expand our platform…we want to offer every kind of developer (partners, customers, and indie devs) the means to use Segment data. \n\n## **Project we are working on:**\n\nWe want to give our users and partners:\n\n- the ability to submit custom logic which we run as part of a high-throughput pipeline (think high throughput Lambda at 1/1000th the cost)\n- the ability to query Segment data on the fly, from a big multi-tenant database (online data of our user’s users)\n- new superpowers to combine, modify, and transform data coming through the pipeline (createa visual chain of transformations and steps)\n\nWe want to do all of this across a pipeline which processes hundreds of thousands of events per second for some of the worlds largest brands, like Github, Nike, and Intuit.\n\n## **What We Do:**\n\n- We implement [++high-performance data pipelines with Go, Kafka, and Docker++](https://segment.com/blog/allocation-efficiency-in-high-performance-go-services/)\n- We’re focused on building incredible developer experiences, with tools like our debugger, [++event delivery view++](https://segment.com/blog/new-data-visibility-features/), and asynchronous client libraries.\n- We want to give our users ‘data superpowers’\n- We handle [++billions of messages per day++](https://segment.com/blog/introducing-centrifuge/), putting a [++premium on correctness++](https://segment.com/blog/exactly-once-delivery/)\n\n## **Who** **We're** **Looking** **For:**\n\n- You come from a background of delivering projects from start to finish\n- You love the challenge of building a platform, where users will surprise and delight you with what they build\n- You feel relatively comfortable up and down the stack (both frontend and backend)\n\n## **Tools we use:**\n\n- AWS (EC2, ECS, RDS, S3, and more!)\n- Docker\n- GraphQL\n- Typescript\n- React\n\n## **Requirements:**\n\n- Strong track record of delivering product and internal systems\n- Great computing fundamentals\n- Experience at many levels of the stack (building out some frontend and some backend code)\n\nSegment is an equal opportunity employer. We believe that everyone should receive equal consideration and treatment in all terms and conditions of employment regardless of sex, gender (including pregnancy, childbirth, breastfeeding or related medical conditions), sexual orientation, gender identity, gender expression, race, color, religion, creed, national origin, ancestry, age (over 40), physical disability, mental disability, medical condition, genetic information, marital status, domestic partner status, military or veteran status, height, weight, AIDS/HIV status, and any other protected category under federal, state or local law. Pursuant to the San Francisco Fair Chance Ordinance, we will consider for employment qualified applicants with arrest and conviction records.\n",
        applyUrl: "https://grnh.se/2d8f45d71",
        company: {
          logoUrl: null,
          name: "Segment",
        },
      },
    },
  },
};

const errorMock = {
  request: {
    query: GETAJOB,
  },
  error: new Error("error , failed to fetch"),
};
test("test loading", () => {
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <About />
    </MockedProvider>
  );
  const desc = screen.getByText("Loading...");
  expect(desc).toBeInTheDocument();
});

test("test success", async () => {
  await render(
    <MockedProvider mocks={[jobmocks]} addTypename={false}>
      <About />
    </MockedProvider>
  );
  const text = await screen.findByText("Senior Fullstack Engineer - Platform");
  const button = await screen.findByRole("button", { name: "apply" });
  const link = await screen.findByTitle("link");
  expect(button).toBeInTheDocument();
  expect(button).not.toBeDisabled();
  expect(text).toBeInTheDocument();
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "https://grnh.se/2d8f45d71");
  expect(link).toHaveAttribute("target", "_blank");
});

it("test error state", async () => {
  render(
    <MockedProvider mocks={[errorMock]} addTypename={false}>
      <About />
    </MockedProvider>
  );
  const error = await screen.findByText("error , failed to fetch");
  expect(error).toBeInTheDocument();
});
