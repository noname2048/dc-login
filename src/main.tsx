import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/App.tsx";
import { worker } from "@/mocks/browser";

import "./global.css";

if (process.env.NODE_ENV === "development") {
  worker.start().then(() => {});
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
