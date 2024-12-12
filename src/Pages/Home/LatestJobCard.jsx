import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LatestJobCard = ({ job }) => {
  const {
    company,
    description,
    applicationDeadline,
    category,
    jobType,
    title,
    company_logo,
    location,
    _id,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="flex gap-2 items-center m-2">
        <figure>
          <img className="w-16" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h4>{company}</h4>
          <p className="flex gap-1 items-center">
            <FaMapMarkerAlt></FaMapMarkerAlt>
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestJobCard;
