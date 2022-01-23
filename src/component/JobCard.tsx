import "./JobCard.scss";
import { useNavigate } from "react-router-dom";

function JobCard({
  item,
}: {
  item: {
    slug: string;
    title: string;
    countries: { name: string; id: string }[];
    remotes: { type: string }[];
    cities: { name: string; id: string }[];
    company: { name: string; slug: string };
  };
}) {
  let navigate = useNavigate();
  const { slug, company, title, cities, countries, remotes } = item;
  return (
    <div>
      <div
        className="job-box"
        onClick={() => navigate(`/about/${slug}/${company?.slug}`)}
      >
        <h3 className="title">{title}</h3>
        <h4 className="company-name">{company?.name}</h4>
        {cities?.map((city, index: number) => (
          <span key={index}>{city.name}</span>
        ))}
        {countries?.map((country, index: number) => (
          <span key={index}> , {country.name}</span>
        ))}

        <p>{remotes?.length > 0 ? "remote" : "onsite"}</p>
      </div>
    </div>
  );
}

export default JobCard;
