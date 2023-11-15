import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../styles/user-list.css";
import noProfilePic from "../assets/no-profile.png"
import { useKeycloak } from "@react-keycloak/web";

const UserList = ({ users }) => {
  const { keycloak } = useKeycloak();
  const header = {
    Authorization: `Bearer ${keycloak.token}`,
  };

  const { data: avatarData, loading: avatarLoading, error: avatarError } = useFetch(
    users?.user?.avatar?.replace("8081", "8088") ?? noProfilePic,
    header
  );

  return (
    <div className="users-list">
      {users.map((user) => (
        <Link to={`/users/${user.id}`} className="user-container" key={user.id}>
          {avatarData && !avatarError && <img src={avatarData} className="user-avatar" />}
          <h2> {user.username} </h2>
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
      ))}
    </div>
  );
};

export default UserList;
