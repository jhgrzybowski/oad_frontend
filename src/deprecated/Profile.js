import { useState } from "react";
import ProfileContent from "./ProfileContent";
import ProfileName from "./ProfileName";
import ProfilePicture from "./ProfilePicture";
import useFetch from "../hooks/useFetch";

const Profile = () => {

    const[userId, setUserId] = useState(null);
    const{data, isLoading, error} = useFetch('http://localhost:8000/profiles' + userId);

    // const[username, setUsername] = useState('');
    // const{ userData, searchError } = useSearch('http://localhost:8000/profiles?username' + userId)
    
    const handleUserId = (event) => {
        event.preventDefault();
        setUserId(userId);
    }

    return (
        <div className="profile">
            { isLoading && <div className="loading">Loading...</div> }
            { !error && data && <ProfilePicture profilePicture={data.profilePicture} /> }
            { error && <div className="error"> { error } </div> }
            { !error && data && <ProfileName firstName = {data.firstName} secondName={data.secondName} /> }
            { !error && data && <ProfileContent username = {data.username} email = {data.email} /> }
           

            <div className="select-user">
                <form className="id-form" onSubmit={handleUserId}>
                    <input  type="number" value={userId} onChange={(e) => setUserId(e.target.value)} />
                    <input type="submit" />
                </form>
            </div>    
        </div> 
        

     );
}
 
export default Profile;