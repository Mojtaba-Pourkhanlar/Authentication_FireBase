import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth";
import DivLayout from "../../helpers/DivLayout";
import { box, divLayout } from "../../styles";

const Auth = () => {
  const history = useNavigate();
  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBhU58hCQ7S25LOtPN1nqL6oLJX4mwHKXc";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBhU58hCQ7S25LOtPN1nqL6oLJX4mwHKXc";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: user,
        password: pass,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setLoading(false);

        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = " Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        history("/dashboard");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <DivLayout style={divLayout}>
        <Box sx={box}>
          <Typography variant="h2">{isLogin ? "Login" : "Sign Up"}</Typography>

          <form onSubmit={submitHandler}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />

            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              sx={{ mt: "15px" }}
              required
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            {loading ? (
              <Backdrop
                sx={{
                  color: "#FFEB3B",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={loading}
              >
                <CircularProgress sx={{ color: "#FFEB3B" }} />
              </Backdrop>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                fullWidth
                sx={{ mt: "30px", height: "50px" }}
              >
                {isLogin ? "Login" : "Create Account"}
              </Button>
            )}

            <Typography
              variant="h5"
              align="center"
              onClick={switchAuthModeHandler}
              sx={{ mt: "20px", cursor: "pointer", color: "#7E7100" }}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </Typography>
          </form>
        </Box>
      </DivLayout>
    </>
  );
};

export default Auth;
