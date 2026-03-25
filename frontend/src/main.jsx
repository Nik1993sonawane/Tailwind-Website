import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="877494123483-n243jpg5bv32jo8qv7rnp68mok0l4ufa.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);