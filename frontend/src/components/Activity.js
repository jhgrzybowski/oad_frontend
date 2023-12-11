import useFetch from "../hooks/useFetch";
import { useKeycloak } from "@react-keycloak/web";
import "../styles/loader.css";

const Activity = ({ activityURL }) => {
  const { keycloak, initialized } = useKeycloak();
  const header = {
    Authorization: `Bearer ${keycloak.token}`,
  };

  const { data, loading, error } = useFetch(
    activityURL.replace("8081", "8088"),
    header
  );

  return (
    <span>
      {data && !error && !loading && (
        <div className="activity">
          {loading && <div className="loading-page"></div>}
          {error && !data && (
            <div className="error-page">Błąd ładowania danych z serwera</div>
          )}
          {data && !error && !loading && (
            <img src={data} className="activity-image" />
          )}
        </div>
      )}
    </span>
  );
};

export default Activity;
