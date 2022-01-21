import React from 'react';
import './JobCard.scss'
function JobCard({item}:{item:any}) {

  return <div>

        <div className="job-box">
          <h3 className="title">{item.title}</h3>
          <h4 className="company-name">{item.company?.name}</h4>
          {item.cities?.map((city: { name: string } , index:number) => (
            <span key={index}>{city.name}</span>
          ))}
          {item.countries?.map((country: { name: string } , index:number) => (
            <span key={index}> , {country.name}</span>
          ))}

          <p>
              {item.remotes?.length>0 ? "remote":"onsite"}
          </p>
        </div>
  </div>;
}

export default JobCard;
