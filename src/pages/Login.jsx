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


    <div className="hero min-h-screen " >
        
  <div className="hero-overlay bg-opacity-60"></div>
  <video controls autoPlay loop className="object-cover w-full h-full"  >

<source src="../assets/istockphoto-1449327718-640_adpp_is.mp4" type="video/mp4"></source>
        </video>

        {/* <audio controls className="hidden" autoPlay loop>

<source src="/RainFallMedium PE1005201.mp3" type="audio/mp3">

</source>
        </audio> */}
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-[100px] font-bold text-white my-font">Hello there 👋🏻</h1>
      <p className="mb-5 text-white text-lg text">          Join the conversation, meet new people, and make connections in one shared room.
.</p>
      <button  onClick={handleLoginWithGoogle}  className="btn ">Login With Google <img  className="max-w-[20px]" src="../assets/search.png"/>
</button>
    </div>
  </div>
</div>

    )
}

export default Login























