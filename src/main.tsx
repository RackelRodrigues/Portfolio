import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { axeAccessibilityReporter } from "./utils/axeaccessibility/axeAccessibilityReport.ts";

axeAccessibilityReporter();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
