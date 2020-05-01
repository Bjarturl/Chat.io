import React from 'react';
import { socket } from '../../services/socketService';
import Message from '../Message';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Container of all messages in a room
export class Chatbox extends React.Component {
    componentDidMount() { 
        // Update the messages in chat 
        socket.on('updatechat', (roomName, msgs) => {
            this.setState({message: ''});
            var privates = this.state.messages.filter(m => m.message.substr(0, 9) === "(PRIVATE)");
            for(var i in msgs) {
                msgs[i].id = this.state.messageId;
                this.setState({
                    messageId: this.state.messageId + 1}); // Each message has a unique id
            }
            this.setState({
                messages: ([...msgs, ...privates]).sort((m1, m2) => m1.id >= m2.id)});
        });
        
        // Display private messages a certain way when received
        socket.on('recv_privatemsg', (sender, message) => {
            var msg = {
                message: "(PRIVATE) " + message,
                nick: sender,
                timestamp: "",
                id: this.state.messageId
            }
            this.setState({messageId: this.state.messageId + 1}); 
            this.setState(prevState => ({messages: [...prevState.messages, msg]}));
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            message: '',
            messageId: 0
        };
    }

    // Send a message to a certain room
    sendMessage(room, message) {
        if(message === '') { return false;}
        socket.emit('sendmsg', {roomName: room, msg: message});
        this.setState({message: ''})
    }

    render() {
        const { messages, message, messageId } = this.state;
        const { room } = this.props;
        return (
            <>
                <div className="chat-box"> 
                {
                    messages.map((msg) =>
                        <Message 
                        key={msg.id}
                        message={msg.message}
                        nick={msg.nick}
                        date={msg.timestamp.substring(0, 10)}
                        time={msg.timestamp.substring(11, 16)}
                        />)
                         
                }
                </div>
                <div className="input-container">
                    <input type="text" name="msg" value={ message }placeholder="Enter your message here..." onChange={e =>
                    this.setState({message: e.target.value })}></input>
                    <button type="button" onClick={()=> {
                        this.sendMessage(room, message)
                    }}>Send</button>
                </div>
            </>
        );
    };
};

const mapStateToProps = reduxStoreState => {
    return {
        room: reduxStoreState.room
    };
};

Chatbox.propTypes = { //Prop validation
    room: PropTypes.string
}

export default connect( mapStateToProps )(Chatbox);