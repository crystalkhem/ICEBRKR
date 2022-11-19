import { useEffect, useState } from "react"
import ProfileDetails from "../components/ProfileDetails"
import './Dash.css';

const Profiles = () => {
    const [profiles, setProfiles] = useState(null)

    useEffect(() => {
        const fetchProfiles = async () => {
            const response = await fetch('http://localhost:4000/api/profiles')
            const json = await response.json()

            if (response.ok) {
                setProfiles(json)
            }
        }

        fetchProfiles()
    }, [])

    return(
        <div className="dash">
            <div className="workouts">
            <h3><u><i>Profiles</i></u></h3> 
                {profiles && profiles.map((profile) => (
                    <ProfileDetails key={profile._id} profile={profile} />
                ))}
            </div>
        </div>
    )
}


export default Profiles
