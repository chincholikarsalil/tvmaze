import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mx-auto text-light">TV Schedule</span>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
