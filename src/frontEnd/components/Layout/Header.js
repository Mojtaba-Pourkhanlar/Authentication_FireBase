import { AppBar, Button, Container, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth";

export const Header = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          top: "0",
          background: "#20295B",
          height: "80px",
        }}
      >
        <Container maxWidth="xl" disableGutters sx={{ height: "100%" }}>
          <Grid
            container
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: { xs: "10px", sm: "15px", lg: "20px", xl: "0" },
              height: "100%",
            }}
          >
            <Grid item>
              <Typography variant="h5">Mr.Pourkhanlar</Typography>
            </Grid>
            <Grid item>
              {!isLoggedIn && (
                <Link to="/auth" style={{ textDecoration: "none" }}>
                  <Button variant="outlined" color="warning" size="large">
                    Login
                  </Button>
                </Link>
              )}
              {isLoggedIn && (
                <>
                  <Link
                    to="/profile"
                    style={{ textDecoration: "none", margin: "0 10px" }}
                  >
                    <Button variant="outlined" color="warning" size="large">
                      Profile
                    </Button>
                  </Link>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", margin: "0 10px" }}
                  >
                    <Button
                      variant="outlined"
                      color="warning"
                      size="large"
                      onClick={logoutHandler}
                    >
                      Logout
                    </Button>
                  </Link>
                </>
              )}
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </div>
  );
};
