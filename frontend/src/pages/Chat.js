import io from 'socket.io-client'
import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import './chat.css'

const socket = io.connect('http://localhost:4000/')

const messageForm = document.getElementById('send-container')

const Chat = () => {
    const { user } = useAuthContext();
    const [inputmsg, setMsg] = useState('zero message')
    const [outputmsg, setOutputMsg] = useState('zero message')

    const sendMessage = (event) => {
        socket.emit('send_message', user.firstName + ': ' + inputmsg)
    }
   
        socket.on('get_message', data => {
            setOutputMsg(data)
        })

    return(
    <div className="chatbox"><h1>chatbox</h1>

    <div className="message-container">{outputmsg}</div>
    <form id="send-container">



    <div className="typing">
    <input type='text' onChange={(event) => setMsg(event.target.value)} placeholder="write a message"></input>
    
    <button onClick={sendMessage}>enter</button></div></form>
    


    <br />
    </div>
    )
}


export default Chat

//socket.emit = sends messages. 1st parameter = type of message
//socket.on = receives messages of 1st parameter