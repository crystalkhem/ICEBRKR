// import { useEffect, useState } from "react"
// import ProfileDetails from "../components/ProfileDetails"
// import './Dash.css';
import { useAuthContext } from "../hooks/useAuthContext";

const Profile = () => {
    const { user } = useAuthContext();

    return(
        <div>
           {user &&( <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            </div>
            <div>
            <h1>Name: {user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Date of Birth: xx-xx-xxxx</p>
            <p>Major: comp sci</p>
            <p>Interests: abc abc abc</p> 
            <p>Bio: This is the bio</p>
            </div>
            </div>
           )}
        </div>
           )
}


export default Profile
