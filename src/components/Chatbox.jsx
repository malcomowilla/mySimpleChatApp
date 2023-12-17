import { useEffect,useState } from "react";
import Message from "./Message"
import { db } from "../auth/Firebase";
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";


const Chatbox = () => {
            const [messages, setMessages] = useState([])


    useEffect(()=> {

        const q = query(
            collection(db, "messages"),
            orderBy('createdAt'),
            limit(50));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const messages = [];
          querySnapshot.forEach((doc) => {
              messages.push({...doc.data(),id: doc.id});
            console.log(doc.data())
          });
          setMessages(messages)
        });
        console.log(messages)
        return ()=> unsubscribe()
    },[])

  return (
    <div className="p-[60px] max-w-full">
        {messages.map(message=> {
            return <Message key={message.id} message={message}/>
        })  }
        
        
        
        </div>
  )
}

export default Chatbox
























