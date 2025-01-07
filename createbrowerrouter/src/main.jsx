import { createRoot } from "react-dom/client";
import App from "./App";
import { Suspense } from "react";

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<h1>Loading ....</h1>}>
    <App />
  </Suspense>
);
