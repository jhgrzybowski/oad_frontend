import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import noProfilePic from "../assets/no-profile.png";
import { useKeycloak } from "@react-keycloak/web";

const UserLink = ({ user }) => {
  const { keycloak } = useKeycloak();

  const header = {
    Authorization: `Bearer ${keycloak.token}`,
  };

  const {
    data: avatarData,
    loading: avatarLoading,
    error: avatarError,
  } = useFetch(
    user?.avatar?.replace("8081", "8088") ?? noProfilePic, 
    header
  );

  return (
    <Link to={`/users/${user.id}`} className="user-container">
      {avatarLoading && <img src={noProfilePic} className="user-avatar" />}
      {avatarData && !avatarError && (
        <img src={avatarData} className="user-avatar" />
      )}
      <h2>
        {user.firstName} {user.lastName} 
      </h2>
      <div className="user-labels">
        {user.weights
          .filter((weight) => {
            return weight.weight >= 1 ? weight.weight : null;
          })
          .map((weight) => (
            <p className="label" key={weight.label}>
              {weight.label}
            </p>
          ))}
      </div>
    </Link>
  );
};

export default UserLink;
