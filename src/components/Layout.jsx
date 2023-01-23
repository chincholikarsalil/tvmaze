import { Outlet, useNavigate } from "react-router-dom";

export const Layout = ({ header }) => {
  const navigate = useNavigate();

  const backToSchedule = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {!header.startsWith("TV") && (
            <button
              className="btn btn-secondary mr-1"
              type="button"
              onClick={backToSchedule}
            >
              Schedule
            </button>
          )}
          <span className="navbar-brand mx-auto text-light">{header}</span>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
