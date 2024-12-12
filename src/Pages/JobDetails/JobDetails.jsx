import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { title, company, description, _id } = useLoaderData();
  //   console.log(job);
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/jobApply/{_id}`}>
            <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
