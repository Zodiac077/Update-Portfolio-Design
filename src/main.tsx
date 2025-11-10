
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  import "./styles/smooth-scroll.css";

  // Enable smooth scrolling with performance optimizations
  if ('scrollBehavior' in document.documentElement.style) {
    createRoot(document.getElementById("root")!).render(<App />);
  } else {
    // Fallback for browsers that don't support smooth scrolling
    import('smoothscroll-polyfill').then((smoothscroll) => {
      smoothscroll.polyfill();
      createRoot(document.getElementById("root")!).render(<App />);
    });
  }
  