import React, { useEffect, useState, useCallback } from "react";
import parser from "html-react-parser";
import { useParams } from "react-router-dom";
import { getEpisode, getShow, getShowCast } from "../services/tvmaze";

export const ShowDetails = ({ setHeader }) => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);
  const [showCast, setShowCast] = useState(null);
  const [episode, setEpisode] = useState(null);

  const fetchData = useCallback(async (showId) => {
    try {
      const show = await getShow(showId);
      setShow(show);
      const episode = await getEpisode(
        show?._links?.nextepisode?.href.split("/").pop()
      );
      setEpisode(episode);
      const showCast = await getShowCast(showId);
      setShowCast(showCast);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    setHeader("Show Details");
    fetchData(showId);
  }, [fetchData, setHeader, showId]);

  const handleButtonClick = (event) => {
    window.open(event.target.value, "_blank");
  };

  return (
    <div className="container mt-5">
      {show && (
        <div className="row">
          <div className="col-md-4">
            <img
              src={show?.image?.original}
              className="img-thumbnail"
              alt={show?.name}
              loading="lazy"
            />
          </div>
          <div className="col-md-8">
            <h2 className="mb-3">{show?.name}</h2>
            <div className="badges">
              <span className="badge badge-warning mr-1">{show?.language}</span>
              <span className="badge badge-dark mr-1">{show?.type}</span>
              <span className="badge badge-success mr-1">{show?.genres}</span>
              <span className="badge badge-danger">{show?.network?.name}</span>
            </div>
            <hr />
            {episode && (
              <>
                <strong>
                  Current Episode ({episode?.airdate} | {episode?.airtime}):
                </strong>{" "}
                {episode?.name}
                <span>{episode?.summary && parser(episode?.summary)}</span>
              </>
            )}
            <hr />
            <span>
              <strong>About:</strong> {show?.summary && parser(show?.summary)}
            </span>
            {showCast && showCast.length > 0 && (
              <span>
                <strong>Cast: </strong>
                {showCast.map((item, index) => (
                  <span key={index} className="badge badge-info mr-1">
                    {item?.person?.name}
                  </span>
                ))}
              </span>
            )}
            <p className="mt-3">
              <strong>Premiered:</strong> {show?.premiered}
            </p>
            <p>
              <strong>Schedule:</strong> {show?.schedule?.days?.join(", ")} at{" "}
              {show?.schedule?.time}
            </p>
            <hr />
            {show?.officialSite && (
              <button
                type="button"
                name="officialSite"
                className="btn btn-info mr-1"
                value={show?.officialSite}
                onClick={handleButtonClick}
              >
                Official Website
              </button>
            )}
          </div>
        </div>
      )}
      <br />
    </div>
  );
};
