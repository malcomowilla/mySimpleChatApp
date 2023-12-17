import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";




const Login = () => {
    const {currentUser, sighnInWIthGoogle} = useContext(AuthContext)
console.log(currentUser)
// const navigate = useNavigate()


const handleLoginWithGoogle = ()=> {





    sighnInWIthGoogle()





}



// useEffect(()=> {
//     if (currentUser) {
//         navigate("/chat")
//     }
// },[currentUser])


  return (


    <div className="hero min-h-screen " style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-[100px] font-bold text-white my-font">Hello there 👋🏻</h1>
      <p className="mb-5 text-white text-lg text">          Join the conversation, meet new people, and make connections in one shared room.
.</p>
      <button  onClick={handleLoginWithGoogle}  className="btn ">Login With Google</button>

    </div>
  </div>
</div>

    )
}

export default Login























