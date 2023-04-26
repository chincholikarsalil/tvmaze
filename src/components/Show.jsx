import { useNavigate } from "react-router-dom";
import parser from "html-react-parser";

export const Show = ({ details }) => {
  const show = details?.show;
  const navigate = useNavigate();

  const showDetails = () => {
    navigate(`/show/${show?.id}`);
  };

  return (
    <div className="col-6">
      <div
        className="card mt-3"
        style={{ cursor: "pointer" }}
        onClick={showDetails}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${show?.name}`}
      >
        <div className="row g-0">
          <div className="col-lg-4">
            <img
              src={show?.image?.medium}
              srcSet={`${show?.image?.medium} 1x, ${show?.image?.original} 2x`}
              className="card-img-top img-thumbnail"
              alt={show?.name}
              loading="lazy"
              width="100%"
              height="auto"
            />
          </div>
          <div className="col-lg-8">
            <div
              className="card-body"
              style={{ height: "200px", overflow: "hidden" }}
            >
              <h6 className="card-title font-weight-bold">{show?.name}</h6>
              <span className="badge badge-danger mr-1">
                {details?.airtime}
              </span>
              <span className="badge badge-dark mr-1">{show?.type}</span>
              <span className="badge badge-warning">
                {show?.genres?.join(", ")}
              </span>
              <hr />
              <span className="card-text">
                {show?.summary &&
                  parser(show?.summary.substring(0, 69) + "...")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
