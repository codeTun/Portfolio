import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./pages/landing/hero.css";
import "./pages/landing/about.css";
import "./pages/portfolio/portfolio.css";
import "./pages/resume/resume.css";
import "./pages/contact/contact.css";
import "./pages/404/pageNotFound.css";
import { Analytics } from "@vercel/analytics/react";
import 'flowbite/dist/flowbite.css';

import App from "./App";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>
);
