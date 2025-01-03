import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./components/app/app";
import HomePage from "./components/pages/home-page/home-page";
import ProfilePage from "./components/pages/profile-page/profile-page";
import ReportPage from "./components/pages/raport-page/report-page";
import SignUpPage from "./components/pages/sign-up-page/sign-up-page";

import "./main.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="report" element={<ReportPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
