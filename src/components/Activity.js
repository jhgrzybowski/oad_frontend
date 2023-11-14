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
    <div>
      {loading && <div className="loading-page"></div>}
      {error && !data && (
        <div className="error-page">Błąd ładowania danych z serwera</div>
      )}
      {data && !error && (
        <img src={data} alt="" width="300px" className="activity-image" />
      )}
    </div>
  );
};

export default Activity;
