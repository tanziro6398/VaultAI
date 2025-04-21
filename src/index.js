import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'; // agar App.jsx src ke andar hai

import "./index.css"; // Make sure Tailwind is linked here

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
