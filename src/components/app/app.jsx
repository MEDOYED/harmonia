import { Outlet } from "react-router-dom";

import Header from "../widgets/header/header";

import "./app.css";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
