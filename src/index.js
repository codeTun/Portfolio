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
import "flowbite/dist/flowbite.css";

import App from "./App";

import { BrowserRouter } from "react-router-dom";
import i18next from "i18next";
import global_en from "./locales/en/global.json";
import global_fr from "./locales/fr/global.json";
import global_ar from "./locales/ar/global.json";

i18next.init({
  interpolate: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    fr: {
      global: global_fr,
    },
    ar: {
      global: global_ar,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <i18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
        <Analytics />
      </BrowserRouter>
    </i18nextProvider>
  </React.StrictMode>
);
