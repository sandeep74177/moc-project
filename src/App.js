
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";
import JobCard from "./components/JobCard";
import Footer from "./components/Footer";


const initialJobs = Array.from({ length: 9 }, (_, i) => ({
  title: `Job Title ${i + 1}`,
  salary: "$20,000 - $25,000",
  location: "Dhaka, Bangladesh",
  company: "Google Inc.",
  remote: true,
}));

function App() {
  const [jobs, setJobs] = useState(initialJobs);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreJobs = () => {
    setTimeout(() => {
      if (jobs.length >= 50) {
        setHasMore(false);
        return;
      }

      const newJobs = Array.from({ length: 9 }, (_, i) => ({
        title: `Job Title ${jobs.length + i + 1}`,
        salary: "$20,000 - $25,000",
        location: "Dhaka, Bangladesh",
        company: "Google Inc.",
        remote: true,
      }));
      setJobs((prevJobs) => [...prevJobs, ...newJobs]);
    }, 1000);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Explorin Solutions</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search by: Job title, Position, Keyword..." />
          <input type="text" placeholder="City, state or country" />
          <button>Find Job</button>
        </div>
      </header>
      <InfiniteScroll
        dataLength={jobs.length}
        next={fetchMoreJobs}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p style={{ textAlign: "center" }}>No more jobs to load!</p>}
      >
        <main className="job-list">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </main>
      </InfiniteScroll>
      <Footer/>
    </div>
  );
}

export default App;
