import { useUserProfileByUsername } from "../hooks/useUserProfileByUsername";
import { useKeycloak } from "@react-keycloak/web";
import "../styles/loader.css";
import "../styles/user-profile.css";

const MeProfile = () => {
  const { keycloak } = useKeycloak();
  const { data, loading, error } = useUserProfileByUsername(
    keycloak.tokenParsed.preferred_username
  );

  return (
    <div className="main">
      {loading && <div className="loading-page"></div>}
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
      </div>
    </div>
  );
};

export default MeProfile;
