import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { GETAJOB } from "../graphql/Queries";
import Loader from "../component/Loader";
import Error from "../component/Error";
import "./About.scss";

function About() {
  let { jobslug, companyslug } = useParams();
  const [getAJob, { loading, error, data }] = useLazyQuery(GETAJOB);
  useEffect(() => {
    getAJob({
      variables: {
        input: {
          companySlug: companyslug,
          jobSlug: jobslug,
        },
      },
    });
  }, []);
  if (loading) return <Loader />;
  if (error) return <Error />;
  return (
    <div className="about-box" data-testid="about-box">
      <h3>{data?.job.description}</h3>
      <a href={data?.job.applyUrl} target="_blank" rel="noreferrer">
        <button>apply</button>
      </a>
    </div>
  );
}

export default About;
