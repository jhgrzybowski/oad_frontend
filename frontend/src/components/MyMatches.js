import { useKeycloak } from "@react-keycloak/web";
import { useUserProfileByUsername } from "../hooks/useUserProfileByUsername";
import UserLink from "./UserLink";

const MyMatches = () => {
  const { keycloak } = useKeycloak();
  const { data, loading, error } = useUserProfileByUsername(
    keycloak.tokenParsed.preferred_username
  );

  const header = {
    Authorization: `Bearer ${keycloak.token}`,
  };

  const users = [];

  if (data)
    data.userByUsername.matches.map((match) => {
      users.push(match);
    });

  return (
    <div className="main">
      <h2 className="matches-banner">My Matches</h2>
      {loading && <div className="loading-page"></div>}
      {error && !data && (
        <div className="error-page">Błąd wczytywania danych z serwera</div>
      )}
      {data &&
        users.map((user) => (
          <UserLink user={user} />
          // <Link
          //   to={`/users/${user.id}`}
          //   className="user-container"
          //   key={user.id}
          // >
          //   {avatarData && !avatarError && (
          //     <img src={avatarData} className="user-avatar" />
          //   )}
          //   <h2> {user.username} </h2>
          //   <div className="user-labels">
          //     {user.weights
          //       .filter((weight) => {
          //         return weight.weight >= 1 ? weight.weight : null;
          //       })
          //       .map((weight) => (
          //         <p className="label" key={weight.label}>
          //           {weight.label}
          //         </p>
          //       ))}
          //   </div>
          // </Link>
        ))}
    </div>
  );
};

export default MyMatches;
