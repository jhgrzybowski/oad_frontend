import { useKeycloak } from "@react-keycloak/web";

const Login = () => {
  const { keycloak, initialized } = useKeycloak();

  return (
    <div className="navbar-button my-profile" onClick={() => keycloak.login()}>
      LOGIN
    </div>
  );
};

export default Login;
