import React from "react";
import { Link } from "react-router-dom";
import "../styles/user.css";

const UserList = ({ users }) => {
  return (
    <div className="users-list">
      {users.map((user) => (
        <Link to={`/users/${user.id}`} className="user-container" key={user.id}>
          {user.avatar && <img src={user.avatar} className="user-avatar" />}
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
