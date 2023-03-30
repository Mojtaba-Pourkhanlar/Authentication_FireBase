import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth";
import DivLayout from "../../helpers/DivLayout";
import { box, divLayout } from "../../styles";

const Profile = () => {
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);
  const authCtx = useContext(AuthContext);
  const history = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBhU58hCQ7S25LOtPN1nqL6oLJX4mwHKXc",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: pass,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      history("/profile");
      setShow(true);
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShow(false);
  };

  return (
    <DivLayout style={divLayout}>
      <Box sx={box}>
        <Typography variant="h2">New Password</Typography>

        <form onSubmit={submitHandler}>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            sx={{ mt: "15px" }}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            type="submit"
            sx={{ mt: "30px", height: "50px" }}
          >
            Change Password
          </Button>
        </form>
      </Box>
      <Snackbar open={show} onClose={handleClose} autoHideDuration={1000}>
        <Alert severity="success">Password changed successfully</Alert>
      </Snackbar>
    </DivLayout>
  );
};

export default Profile;
