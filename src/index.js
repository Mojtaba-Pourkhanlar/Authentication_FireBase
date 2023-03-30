import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "./Container";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Container />
  </StrictMode>
);
