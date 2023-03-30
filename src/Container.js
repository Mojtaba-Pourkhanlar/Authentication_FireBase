import { ThemeProvider } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { theme } from "./frontEnd/theme";
import { Auth, Dashboard, Home, Profile } from "./frontEnd/pages";
import { Layout } from "./frontEnd/components/Layout";
import { useContext } from "react";
import AuthContext from "./frontEnd/context/auth";

const Container = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Routes>
          {!isLoggedIn && <Route path="/home" element={<Home />} />}
          {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
          {!isLoggedIn && <Route path="/auth" element={<Auth />} />}
          {isLoggedIn && <Route path="/profile" element={<Profile />} />}
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </ThemeProvider>
    </Layout>
  );
};

export default Container;
