import { useEffect, useState } from "react"
import UserDetails from "../components/UserDetails"
import './Dash.css';

const Users = () => {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('http://localhost:4000/api/user/all-users')
            const json = await response.json()

            if (response.ok) {
                setUsers(json)
            }
        }

        fetchUsers()
    }, [])

    // console.log(users)

    return(
        <div className="dash">
            <div className="workouts">
            <h3><u><i>All users</i></u></h3> 
                {users && users.map((user) => (
                    <UserDetails key={user._id} user={user} />
                ))}
            </div>
        </div>
    )
}


export default Users