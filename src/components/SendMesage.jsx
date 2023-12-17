import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { db } from "../auth/Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";



const SendMesage = () => {
const [text, setText] = useState('')
const {currentUser} = useContext(AuthContext)
const [error, setError] = useState('')
const [alertMessage, setAlertMessage] = useState(true)


const  handleMessage = ()=>{
    setAlertMessage(!alertMessage)
}

    const handleSendMessage = async(e)=> {
        e.preventDefault()

        try {

    if (text.trim() === "") {
        setError('Enter a vald message')
  
  
        return
          
      }

    
            const {uid,displayName,photoURL} = currentUser
            await  addDoc(collection(db, "messages"),{
                textMessage:text,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid,
            })
        } catch (error) {
            console.log(error)
        }

        setText('')
        console.log(text)


    }

  return (
    <div className="bg-gray-500 fixed bottom-0 w-full p-10
    shadow-2xl flex justify-center  ">
        <form  onSubmit={handleSendMessage} 
        action="" className="space-x-4  p-4 ">
        <input onChange={(e)=>setText(e.target.value)}  type="text" name="" id="" 
        className="w-64 focus:w-full duration-500    h-[50px]
        focus:outline-none
         bg-gray-300 focus:text-black rounded-lg
         " />
        <button type="submit" className="text-black w-20 h-10
        ring ring-black ring-offset-0 rounded-lg" >Send</button>
        </form>
      {alertMessage && error && <>
      
        <div role="alert" className="alert alert-error" onClick={handleMessage}>
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"
  ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Enter a valid Meessage</span>
</div>
      
      
      
      
      
      </>
      }
    
        
        </div>
  )
}

export default SendMesage





























