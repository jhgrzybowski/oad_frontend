import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({ children }) => {
  const { keycloak, initialized } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;

  return isLoggedIn ? children : null;
};

export default PrivateRoute;
