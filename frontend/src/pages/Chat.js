import io from 'socket.io-client'

const socket = io.connect('http://localhost:4000')

const Chat = () => {
    socket.emit('connection')

    return(
        <table></table>
    )
}


export default Chat
