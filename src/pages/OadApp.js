// import Main from "../pages/Main";
// import TopBar from "../pages/TopBar";
// import React from 'react';
// import { useKeycloak } from '@react-keycloak/web';
// import LoginPage from './pages/LoginPage';
// import keycloak from './utils/keycloak';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ReactKeycloakProvider } from '@react-keycloak/web';
// import PrivateRoute from './pages/PrivateRoute';

// const OadApp = () => {

//   <ReactKeycloakProvider authClient={keycloak}>
//     <BrowserRouter>
//          <Routes>
//            <Route exact path="/" element={<div>Witaj, bez autoryzacji...</div>} />
//            <Route path="/secured" element={<div>Witaj, zautoryzowano!</div>} />
//          </Routes>
//        </BrowserRouter>
//   </ReactKeycloakProvider>

// const { keycloak, initialized } = useKeycloak();

// if (!initialized) {
//   return <div>Loading...</div>;
// }

// if (!keycloak.authenticated) {
//   return <LoginPage />;
// }
// return (
//   <div>Authorized</div>)

// return (
//   <div className="OadApp">
//     <Main />

//   </div>
// );
// };

// export default OadApp;

import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "../utils/keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";
import WelcomePage from "./WelcomePage";
import PrivateRoute from "../components/PrivateRoute";
import Main from "./Main";
import UserProfile from "../components/UserProfile";
import MeProfile from "../components/MeProfile"

function OadApp() {
  return (
    <div className="app">
      <ReactKeycloakProvider authClient={keycloak}>
        <BrowserRouter>
          <Nav />
          <PrivateRoute>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/users" element={<Main />} />
              <Route path="/users/:id" element={<UserProfile />} />
              <Route path="/me" element={<MeProfile/>} />
            </Routes>
          </PrivateRoute>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default OadApp;
