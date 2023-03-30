import { Box, Typography } from "@mui/material";
import React from "react";
import DivLayout from "../../helpers/DivLayout";

const Home = () => {
  return (
    <DivLayout
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 90px)",
      }}
    >
      <Box>
        <Typography variant="h1" color="#fff">
          Welcome To Home
        </Typography>
      </Box>
    </DivLayout>
  );
};

export default Home;
