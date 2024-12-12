import { useEffect, useState } from "react";
import LatestJobCard from "./LatestJobCard";

const LatestJobs = () => {
  const [jobs, setJobs] = useState([]);
  console.log(jobs);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <LatestJobCard job={job} key={job._id}></LatestJobCard>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
