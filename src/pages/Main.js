import UserList from "../components/UserList";
import { useUsers } from "../hooks/useUsers";
import "../styles/loader.css"
import React from "react";

const Main = () => {
  const { data, loading, error } = useUsers();
  return (
    <div className="main">
      {loading && <div className="loading-page"></div>}
      {error && <div className="error-page">Błąd wczytywania danych z serwera</div>}
      {data && <UserList users={data.users.slice(239,256)} />}
    </div>
  );
};

export default Main;
