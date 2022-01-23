import React from "react";
import { useQuery } from "@apollo/client";
import { JOBS } from "../graphql/Queries";
import "./Home.scss";
import JobCard from "../component/JobCard";
import Loader from "../component/Loader";
import Error from "../component/Error";

function Home() {
  const { loading, error, data } = useQuery(JOBS);
  if (loading) return <Loader />;
  if (error) return <Error />;
  type datatype = typeof data;
  return (
    <div className="jobs-container">
      {data.jobs.map((item: datatype, index: number) => (
        <React.Fragment key={item.id}>
          <JobCard item={item} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Home;
