import React from 'react';
import { connect } from 'react-redux';
import { socket } from '../../services/socketService';
import {updateRoom } from '../../actions/roomActions';
import Chatbox from '../Chatbox';
import PropTypes from 'prop-types';

// Everything except for the sidebar essentially
export const MessageWindow = ({ user, room, updateRoom }) => {
    return (
        <div className="conversation">
            <div>
                <h3>Welcome { user }!</h3>
                {
                    room == "" 
                    ?
                        <p>To begin chatting, select a room from the list.</p>
                    :
                        <div>
                            <p id="room-title">You are in room: { room }<br></br>Click a user to send them a private message.</p>
                            <button onClick={() => {
                                updateRoom("");
                                socket.emit("partroom", room);
                            }}>Leave room</button>
                        </div>
                }
            </div>
                {
                    room == ""
                    ?
                        <></>
                    :
                        <Chatbox />
                }
        </div>
    );
};

const mapStateToProps = reduxStoreState => {
    return {
        user: reduxStoreState.user,
        room: reduxStoreState.room
    };
};

MessageWindow.propTypes = { //Prop validation
    user: PropTypes.string,
    room: PropTypes.string,
    updateRoom: PropTypes.func,
}

export default connect( mapStateToProps, { updateRoom })(MessageWindow);