import { Outlet } from "react-router-dom";

import "./app.css";

function App() {
  return (
    <>
      <div className="app-container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
