import { useKeycloak } from "@react-keycloak/web";
import useFetch from "../hooks/useFetch";
import noProfilePic from "../assets/no-profile.png"

const UserContent = ({ data }) => {
  const { keycloak } = useKeycloak();
  const header = {
    Authorization: `Bearer ${keycloak.token}`,
  };

  const { data: avatarData, loading: avatarLoading, error: avatarError } = useFetch(
    data?.avatar?.replace("8081", "8088") ?? noProfilePic,
    header
  );

  return (
    <div className="user-profile">
      {avatarData && !avatarError && <img src={avatarData} className="user-avatar" />}
      <h2 className="username"> {data.username} </h2>
      <div className="user-labels">
        {data.weights
          .filter((weight) => {
            return weight.weight >= 1 ? weight.weight : null;
          })
          .map((weight) => (
            <span className="label" key={weight.label}>
              {weight.label}
            </span>
          ))}
      </div>
    </div>
  );
};

export default UserContent;
