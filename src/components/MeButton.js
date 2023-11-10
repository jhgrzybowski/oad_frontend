import { Link } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

const MeButton = () => {
  const { keycloak, initialized } = useKeycloak();

  return (
    <div className="navbar-button my-profile">
      <Link to="/me" className="navbar-button profile-link">
        {keycloak.tokenParsed.preferred_username}
      </Link>
      <div className="dropdown-content">
        <div onClick={() => keycloak.logout()} className="navbar-button">
          LOGOUT
        </div>
      </div>
    </div>
  );
};

export default MeButton;
