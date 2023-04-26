import { useEffect, useState, useCallback } from "react";
import { getSchedule } from "../services/tvmaze";
import { Show } from "./Show";

export const Schedule = ({ setHeader }) => {
  const [schedule, setSchedule] = useState([]);

  const fetchData = useCallback(async () => {
    setSchedule(await getSchedule());
  }, []);

  useEffect(() => {
    setHeader?.("TV Schedule");
    fetchData?.();
  }, [fetchData, setHeader]);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2">
        {schedule?.map((details, index) => {
          return details?.show?.image && <Show key={index} details={details} />;
        })}
      </div>
      <br />
    </div>
  );
};
