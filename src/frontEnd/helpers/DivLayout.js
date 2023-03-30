import React from "react";
import { Container } from "@mui/material";

const DivLayout = ({ children, style }) => {
  return (
    <div style={{ marginTop: "90px" }}>
      <Container maxWidth="xl" disableGutters sx={style}>
        {children}
      </Container>
    </div>
  );
};

export default DivLayout;
