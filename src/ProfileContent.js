const ProfileContent = ( {email, username}) => {
    return ( 
        <div className="main-content">
            <p> {username} </p>
            <p> {email} </p>
        </div>
     );
}
 
export default ProfileContent;