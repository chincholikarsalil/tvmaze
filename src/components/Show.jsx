import { useNavigate } from "react-router-dom";
import parser from "html-react-parser";

export const Show = ({ details }) => {
  const show = details.show;
  const navigate = useNavigate();

  const showDetails = () => {
    navigate(`/show/${show.id}`);
  };

  return (
    <div className="col-6">
      <div
        className="card mt-3"
        style={{ cursor: "pointer" }}
        onClick={showDetails}
      >
        <div className="row g-0">
          <div className="col-lg-4">
            <img
              src={show.image.medium}
              className="card-img-top img-thumbnail"
              alt={show.name}
            />
          </div>
          <div className="col-lg-8">
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{show.name}</h5>
              <span className="badge badge-danger mr-1">{details.airtime}</span>
              <span className="badge badge-dark mr-1">{show.type}</span>
              <span className="badge badge-warning">
                {show.genres.join(", ")}
              </span>
              <hr />
              <span className="card-text">
                {parser(show.summary.substring(0, 100) + "...")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
