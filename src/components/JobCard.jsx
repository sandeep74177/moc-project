

import React from 'react';
import "./jobcard.css"
import googleIcon from "../assets/google-icon.png";
import locationIcon from "../assets/location-icon.png";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-header">
        <img src={googleIcon} alt="Company Logo" className="company-logo" />
        <h3>{job.title}</h3>
      </div>
      <p>Salary: {job.salary}</p>
      <p>
        <img src={locationIcon} alt="Location" className="icon" />
        {job.location}
      </p>
      <p>Company: {job.company}</p>
      {job.remote && <span className="remote-badge">REMOTE</span>}
    </div>
  );
};
export default JobCard;