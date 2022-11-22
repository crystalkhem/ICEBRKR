// import { useEffect, useState } from "react"
// import ProfileDetails from "../components/ProfileDetails"
// import './Dash.css';
import { useAuthContext } from "../hooks/useAuthContext";

import { Link } from 'react-router-dom';

const Profile = () => {
    const { user } = useAuthContext();


    return(
        <div>
           {user &&( <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
                <img style={{ width:"100%", height: "auto" }} src={user.image} alt=""/>
            </div>
            <div>
            {/* <button onClick={handleEdit}>edit</button> */}
            <h1>Name: {user.firstName}</h1>
            <p>Email: {user.email}</p>
            {/* <p>Date of Birth:</p> */}
            <p>Major: Computer Science</p>
            <p>Interests: {user.categories}</p>
            <p>Bio: Coding is fun!!</p>

            </div>
            </div>
           )}
        </div>
           )
}


export default Profile
