import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "./Container";
import { BrowserRouter } from "react-router-dom";
import { AuhContextProvider } from "./frontEnd/context/auth";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AuhContextProvider>
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    </AuhContextProvider>
  </StrictMode>
);
