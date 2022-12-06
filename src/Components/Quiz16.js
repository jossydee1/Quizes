import React from "react";

// Form Data types

function Quiz16() {
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    policy: false,
    employment: "",
    jobType: "",
  });

  // console.log(formData.jobType);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: type === "checkbox" ? checked : value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password === formData.confirmpassword) {
      console.log("successfull");
    } else {
      alert("passwords do not match");
      return;
    }
    console.log(formData);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <form>
        <div>
          <input
            type="text"
            name="firstname"
            placeholder="firstname"
            onChange={handleChange}
            value={formData.firstname}
          />
          <input
            type="text"
            name="lastname"
            placeholder="lastname"
            onChange={handleChange}
            value={formData.lastname}
          />
        </div>
        <br />
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            value={formData.password}
          />
          <input
            type="password"
            name="confirmpassword"
            placeholder="confirmPassword"
            onChange={handleChange}
            value={formData.confirmpassword}
          />
        </div>
        <br />
        <div>
          <input
            type="checkbox"
            id="policy"
            checked={formData.policy}
            name="policy"
            onChange={handleChange}
          />
          <label htmlFor="policy">agree to our privacy policies</label>
        </div>
        <br />
        <fieldset
          style={{
            display: "inline-block",
          }}
        >
          <legend>Current Employment Status</legend>
          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            onChange={handleChange}
            checked={formData.employment === "unemployed"}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />
          <input
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            onChange={handleChange}
            checked={formData.employment === "part-time"}
          />
          <label htmlFor="part-time">Part-Time</label>
          <br />
          <input
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            onChange={handleChange}
            checked={formData.employment === "full-time"}
          />
          <label htmlFor="full-time">Full-Time</label>
          <br />
        </fieldset>
        <br />
        <br />
        <div>
          <select
            id="jobType"
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
          >
            <option value="">-- Select --</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Onsite">Onsite</option>
          </select>
        </div>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Quiz16;
