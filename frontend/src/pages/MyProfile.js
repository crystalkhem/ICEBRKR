import { useEffect, useState } from "react"
import ProfileDetails from "../components/ProfileDetails"
const MyProfile = () => {
    const [profile, setProfile] = useState(null)
    const [word, setWord] = useState('start')

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('http://localhost:4000/api/profiles/me')
            const json = await response.json()

            if (response.ok) {
                setProfile(json)
                setWord('hello')
            }
        }

        fetchEvents()
    }, [])

    return(
        <div className="dash">
            <div className="workouts">
            <h3><u><i>User Profile</i></u></h3> 
                <ProfileDetails profile={profile} />
        
            </div>
        </div>
    )
}


export default MyProfile
