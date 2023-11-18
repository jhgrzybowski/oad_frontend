import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "../utils/keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import WelcomePage from "./WelcomePage";
import PrivateRoute from "../components/PrivateRoute";
import Main from "./Main";
import UserProfile from "../components/UserProfile";
import MeProfile from "../components/MeProfile";
import MyMatches from "../components/MyMatches";

function OadApp() {
  return (
    <div className="app">
      <ReactKeycloakProvider authClient={keycloak}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<WelcomePage />} />
          </Routes>
          <PrivateRoute>
            <Routes>
              <Route path="/users" element={<Main />} />
              <Route path="/users/:id" element={<UserProfile />} />
              <Route path="/me" element={<MeProfile />} />
              <Route path="/matches" element={<MyMatches />} />
            </Routes>
          </PrivateRoute>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default OadApp;
