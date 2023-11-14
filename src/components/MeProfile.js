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

      {data && <UserContent data={data.userByUsername}/>}

      {data && <div className="user-activities">
        {data.userByUsername.activities.map((activity) => (
          <Activity key={activity} activityURL={activity} />
        ))}
      </div>}

      {/* {data && (
        <div className="user-profile">
          {data && data.userByUsername.avatar && (
            <img src={data.userByUsername.avatar} className="user-avatar" />
          )}
          {data && <h2> {data.userByUsername.username} </h2>}
          {data && (
            <div className="user-labels">
              {data.userByUsername.weights
                .filter((weight) => {
                  return weight.weight >= 1 ? weight.weight : null;
                })
                .map((weight) => (
                  <p className="label" key={weight.label}>
                    {weight.label}
                  </p>
                ))}
            </div>
          )}
          <div className="user-activities">
            {data.userByUsername.activities.map((activity) => (
              <Activity key={activity} activityURL={activity} />
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default MeProfile;
