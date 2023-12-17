import NavBar from "./components/NavBar"
import ChatRoom from "./pages/ChatRoom"
import Login from "./pages/Login"
import {Routes, Route} from 'react-router-dom'
import PrivateRoute from "./routes/PrivateRoute"
import { AuthContext } from "./context/AuthContext"
import { useEffect, useState } from "react"
import {signOut} from 'firebase/auth'
import { auth, googleAuth } from "./auth/Firebase"
import { signInWithRedirect,onAuthStateChanged } from "firebase/auth";
import {useNavigate} from 'react-router-dom'

// import { signInWithPopup } from "firebase/auth";

const App = () => {
  const navigate =  useNavigate()

    const [currentUser, setCurrentUser] = useState(null)

  const [loading, setIsLoading] = useState(true)

    useEffect(() => {
      // Listen for changes in the authentication state

     const sign = onAuthStateChanged(auth, (user)=> {

        setCurrentUser(user)
        setIsLoading(false)

        if (user) {
          navigate('/chat')
        }
      
     }
     )

     return () => sign()
      
     

  
      // Clean up the subscription when the component unmounts
    }, [navigate]); 

    const sighnInWIthGoogle = async ()=> {

      try {
        await signInWithRedirect(auth,googleAuth)

        
      } catch (error) {
        console.log(error)
      }



    }

      const logout = async() => {
        await signOut(auth)
      }

      console.log(currentUser); // Log the current user


      

  return (
    <div className="">
      <AuthContext.Provider value={{currentUser, setCurrentUser, sighnInWIthGoogle,
      logout}}>
      <NavBar/>

<Routes>
{!loading && 
  <>
  
  <Route path="/" element={<Login/>}></Route>

<Route path='/chat' element={<PrivateRoute><ChatRoom/></PrivateRoute>}></Route>

 
  </>
}
</Routes>

      </AuthContext.Provider>

    </div>
  )
}

export default App