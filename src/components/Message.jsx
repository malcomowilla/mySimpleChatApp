


const Message = ({message}) => {
  return (
    <>
    
    <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component"
       src={message.avatar} />
    </div>
  </div>
  <div className="chat-header">
    {message.displayName}
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble text3 text-2xl">{message.textMessage}</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>

    
    </>
  )
}

export default Message




