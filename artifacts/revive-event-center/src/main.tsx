import { createRoot } from "react-dom/client";
import App from "./App";
import { initAnalytics } from "./lib/analytics";
import "./index.css";

initAnalytics();
// Replaces the pre-rendered page shell that index.html ships for crawlers.
createRoot(document.getElementById("root")!).render(<App />);
