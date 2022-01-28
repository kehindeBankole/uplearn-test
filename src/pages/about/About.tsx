import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GETAJOB } from "../../graphql/Queries";
import Loader from "../../component/loader/Loader";
import Error from "../../component/error/Error";
import Markdown from "marked-react";
import "./About.scss";

function About() {
  let { jobslug, companyslug } = useParams();
  const { loading, error, data } = useQuery(GETAJOB, {
    variables: {
      input: {
        companySlug: companyslug || "segment",
        jobSlug: jobslug || "senior-fullstack-engineer-platform",
      },
    },
  });

  if (loading) return <Loader />;
  if (error) return <Error />;
  return (
    <div className="about-box" data-testid="about-box">
      <h1>{data.job.title}</h1>
      <Markdown>{data.job.description}</Markdown>
      <a href={data.job.applyUrl} target="_blank" rel="noreferrer" title="link">
        <button type="button" role="button">
          apply
        </button>
      </a>
    </div>
  );
}

export default About;
