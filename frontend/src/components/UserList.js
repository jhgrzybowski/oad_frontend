import React from "react";
import "../styles/user-list.css";
import UserLink from "./UserLink";

const UserList = ({ users }) => {

  return (
    <div className="users-list">
      {users.map((user) => (
        <UserLink key={user.id} user={user}/>
      ))}
    </div>
  );
};

export default UserList;


