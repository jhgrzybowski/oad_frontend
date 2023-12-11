import { Link } from "react-router-dom";
import "../styles/index.css"

const MyChats = () => {
  return (
    <div className="main">
      <h2 className="matches-banner">My Chats</h2>
      <div className="chat-link">
        <Link to="/chats/1">Chat</Link>
      </div>
    </div>
  );
};

export default MyChats;
