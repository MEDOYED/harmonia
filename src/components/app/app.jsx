import { Link, Outlet } from "react-router-dom";

import "./app.css";

function App() {
  return (
    <>
      <div className="app-container">
        <Link className="btn-test" to={"/"}>
          Home
        </Link>
        <Link className="btn-test" to={"/profile"}>
          Profile
        </Link>
        <Link className="btn-test" to={"/registration"}>
          Registration
        </Link>
        <Link className="btn-test" to={"/signup"}>
          Sign Up
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default App;
