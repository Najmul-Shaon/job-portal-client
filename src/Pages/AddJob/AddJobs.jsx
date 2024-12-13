import Swal from "sweetalert2";

const AddJobs = () => {
  const handleAddJob = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJOb } = initialData;
    console.log(min, max, currency, newJOb);
    newJOb.salarayRange = { min, max, currency };

    newJOb.requirements = newJOb.requirements.split("\n");
    newJOb.responsibility = newJOb.responsibility.split("\n");
    console.log(newJOb);

    fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(newJOb),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Job Added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h3>Post A job</h3>
      <form onSubmit={handleAddJob} className="card-body">
        {/* job title  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job title"
            className="input input-bordered"
            required
          />
        </div>
        {/* job location  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            placeholder="Job Location"
            name="location"
            className="input input-bordered"
            required
          />
        </div>
        {/* job type  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select
            defaultValue={"Pick a job type"}
            name="jobType"
            className="select select-ghost w-full max-w-xs"
          >
            <option disabled>Pick a job type</option>
            <option>On site</option>
            <option>Home/Remote</option>
            <option>Hybrid</option>
          </select>
        </div>
        {/* salary range  */}
        <p>Salary Range</p>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* min salray  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Min</span>
            </label>
            <input
              type="number"
              placeholder="Min"
              name="min"
              className="input input-bordered"
              required
            />
          </div>
          {/* max salary  */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Max</span>
            </label>
            <input
              type="number"
              placeholder="Max"
              name="max"
              className="input input-bordered"
              required
            />
          </div>
          {/* currency  */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Currency</span>
            </label>
            <select
              defaultValue={"Pick a Currency"}
              name="currency"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled>Pick a Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>Euro</option>
            </select>
          </div>
        </div>
        {/* description  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Job descriptions"
            required
            name="description"
          ></textarea>
        </div>

        {/* requirements  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Requirements</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Put Here Requiremnets in new line"
            required
            name="requirements"
          ></textarea>
        </div>

        {/* responsibilites  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Responsilbility</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Put Here Responsibility in new line"
            required
            name="responsibility"
          ></textarea>
        </div>

        {/* btn of submit */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddJobs;
