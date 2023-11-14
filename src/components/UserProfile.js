import { useParams } from "react-router-dom";
import { useUserProfileById } from "../hooks/useUserProfileById";
import UserContent from "./UserContent";
import Activity from "./Activity";
import "../styles/loader.css";
import "../styles/user-profile.css";

const UserProfile = () => {
  const { id } = useParams();
  const { data, loading, error } = useUserProfileById(id);

  return (
    <div className="main">
      {loading && <div className="loading-page"></div>}
      {error && !data && (
        <div className="error-page">Błąd wczytywania danych z serwera</div>
      )}
      {data && !error &&  <UserContent data={data.userById} />}
      {data && <div className="user-activities">
        {data.userById.activities.map((activity) => (
          <Activity key={activity} activityURL={activity} />
        ))}
      </div>}
    </div>
  );
};

export default UserProfile;
