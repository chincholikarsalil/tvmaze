import React, { useEffect, useState } from "react";
import { getSchedule } from "../services/tvmaze";
import { Show } from "./Show";

export const Schedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setSchedule(await getSchedule());
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2">
        {schedule &&
          schedule.map((details, index) => (
            <Show key={index} details={details} />
          ))}
      </div>
    </div>
  );
};
