import { useUserProfileByUsername } from "../hooks/useUserProfileByUsername";
import { useKeycloak } from "@react-keycloak/web";
import "../styles/loader.css";
import "../styles/user-profile.css";
import Activity from "./Activity";
import UserContent from "./UserContent";

const MeProfile = () => {
  const { keycloak } = useKeycloak();
  const { data, loading, error } = useUserProfileByUsername(
    keycloak.tokenParsed.preferred_username
  );

  return (
    <div className="main">
      {loading && !data && <div className="loading-page"></div>}
      {error && !data && (
        <div className="error-page">Błąd wczytywania danych z serwera</div>
      )}

      {data && <UserContent data={data.userByUsername} />}

      {data && !loading && (
        <div className="user-activities">
          <h2 className="activities-banner">My activities</h2>
          {data.userByUsername.activities.map((activity) => (
            <Activity key={activity} activityURL={activity} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MeProfile;
