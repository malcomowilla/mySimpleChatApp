
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


const NavBar = () => {
    const {logout,currentUser} = useContext(AuthContext)
    const handleLogout = ()=>{
            logout()

    }
  return (
    <div className="navbar bg-base-100 max-w-4xl mx-auto flex
     justify-between items-center">
  <a className="btn btn-ghost text-xl text3 text-2xl">instantChat</a>
  {/* <button onClick={handleLogout}>Logout</button> */}
  {currentUser ?  <button onClick={handleLogout} className="text3 text-2xl font-bold">Logout</button> : '' }
</div>
  )
}

export default NavBar