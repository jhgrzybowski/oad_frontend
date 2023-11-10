import { useParams } from "react-router-dom";
import { useUserProfileById } from "../hooks/useUserProfileById";
import "../styles/loader.css";
import "../styles/user-profile.css";

const UserProfile = () => {
  const { id } = useParams();
  const { data, loading, error } = useUserProfileById(id);

  return (
    <div className="main">
      {loading && <div className="loading-page"></div>}
      <div className="user-profile">
        {data && data.userById.avatar && (
          <img src={data.userById.avatar} className="user-avatar" />
        )}
        {data && <h2> {data.userById.username} </h2>}
        {data && (
          <div className="user-labels">
            {data.userById.weights
              .filter((weight) => {
                return weight.weight >= 1 ? weight.weight : null;
              })
              .map((weight) => (
                <span className="label" key={weight.label}>
                  {weight.label}
                </span>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
