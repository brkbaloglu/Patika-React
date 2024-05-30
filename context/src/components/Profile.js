import React, {useContext, useState} from 'react'
import { useUser } from '../context/ThemeContext'

function Profile() {
    const { user, setUser } = useUser()
    // console.log(user);
    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setUser({
                id: 1,
                username: "mseven",
                bio: "lorem ipsum"
            })
            setLoading(false)
        }, 1500)
    }       
    
    const handleLogout = () => {
        setUser(null)
    }
  return (            
    <div>
        {
            !user &&
            <button onClick={handleLogin}>{loading ? "Loading..." : "Login"}</button>
        }
        <code>{JSON.stringify(user)}</code>
        <br />     
        {
            user && <button onClick={handleLogout}>Logout</button>
        }
    </div>
  )
}

export default Profile                       